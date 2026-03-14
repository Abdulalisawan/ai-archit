import { db } from "@/config/db";
import { Projectdetail, systemconfigue,  usersTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { and, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest , { params }: { params: { projectid: string } } ) {

   const url= req.nextUrl
   const projectId=url.pathname.split('/').pop()
  const user= await currentUser()
   if (!user) {
  return Response.json({ error: "User not found" }, { status: 401 })
}
  const useremail= user.primaryEmailAddress?.emailAddress
  if (!useremail) {
  return Response.json({ error: "Email not found" }, { status: 400 })
}
  
  if(!projectId){
    return Response.json({ error: "Missing project id" }, { status: 400 })

  }

  const isconfig= await db.select().from(Projectdetail).where(and(eq(Projectdetail.ProjectId , projectId), eq(Projectdetail.UserEmail , useremail))).limit(1)
  const system= await db.select().from(systemconfigue).where(eq(systemconfigue.projectId , projectId))
  return NextResponse.json({isconfig,system})
}