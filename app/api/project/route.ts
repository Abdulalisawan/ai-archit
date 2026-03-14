import { db } from "@/config/db";
import { Projectdetail } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { string } from "three/src/nodes/tsl/TSLCore.js";

export async function POST(req:NextRequest) {
    const{UserInput,device, ProjectId}= await req.json()
    const user= await currentUser()
   

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
      
    }
       const email= user?.primaryEmailAddress?.emailAddress
    const project= await db.insert(Projectdetail).values({
        UserInput ,
        ProjectId,
        device,
        UserEmail:email as string
    }).returning()

    return NextResponse.json({
        success: true,
      project: project[0]

    })


    
}

