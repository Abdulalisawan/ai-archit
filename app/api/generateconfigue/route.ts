
import { db } from "@/config/db";
import { Projectdetail, systemconfigue } from "@/config/schema";
import { APP_LAYOUT_CONFIG_PROMPT } from "@/hooks/Data/Prompt";
import { GoogleGenerativeAI, Schema, SchemaType } from "@google/generative-ai";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";



export async function POST(req: NextRequest) {
    
   try{
        const{userInput,device,projectId}=await req.json()
        const layoutSchema : Schema= {
      type: SchemaType.OBJECT,
      properties: {
        projectName: {
          type: SchemaType.STRING,
          description: "The name of the generated project.",
        },
        projectVisualDescription: {
          type: SchemaType.STRING,
          description: "Global design system and UI blueprint applying to all screens.",
        },
        theme: {
          type: SchemaType.STRING,
          description: "The visual theme of the app.",
        },
        screens: {
          type: SchemaType.ARRAY,
          description: "List of screens for the application.",
          items: {
            type: SchemaType.OBJECT,
            properties: {
              id: {
                type: SchemaType.STRING,
                description: "kebab-case identifier (e.g., 'home-dashboard').",
              },
              name: {
                type: SchemaType.STRING,
                description: "Human readable name of the screen.",
              },
              purpose: {
                type: SchemaType.STRING,
                description: "One sentence describing the purpose of the screen.",
              },
              layoutDescription: {
                type: SchemaType.STRING,
                description: "Extremely specific, implementable layout instructions.",
              },
            },
            required: ["id", "name", "purpose", "layoutDescription"],
          },
        },
      },
      required: ["projectName", "projectVisualDescription", "theme", "screens"],
    };

    const genai= new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string)
    const model=genai.getGenerativeModel({
        model: "gemini-2.5-flash",
        systemInstruction:APP_LAYOUT_CONFIG_PROMPT.replace('{deviceType}', device),
        generationConfig: {
        responseMimeType: "application/json",
        responseSchema: layoutSchema ,
        temperature: 0.4, 
      }
    })
    const result= await model.generateContent(userInput)
    const rawtext= result.response.text()
    const perseresult= JSON.parse(rawtext)
    const systemvalues= perseresult.screens.map((screen:any)=>({
          projectId:projectId,
          screenID:screen.id,
          screeName: screen.name,
          purpose: screen.purpose,
          screendescription:screen.layoutDescription


    }))

    const setinthesystemconfigue= await db.insert(systemconfigue).values(systemvalues)
    const projectupdate=await db.update(Projectdetail).set({
        projectname:perseresult.projectName,
        projectvisualdiscription:perseresult.projectVisualDescription,
        theme:perseresult.theme


    }).where(eq(Projectdetail.ProjectId,projectId))
    return NextResponse.json(perseresult)
   }catch(err){
    console.error("AI Generation Error:", err);
    return NextResponse.json(
      { error: "System failed to generate layout configuration. Please try again." },
      { status: 500 })
   }

}