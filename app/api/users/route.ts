import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
    const user= await currentUser()
    if(!user){
        return NextResponse.json({ error: "Unauthorized and user dosent exist" }, { status: 401 })
    }
    const email= user.primaryEmailAddress?.emailAddress
    if(!email){
         return NextResponse.json({ error: "No email found" }, { status: 400 });
    }
    const isuser= await db.select().from(usersTable).where(eq(usersTable.email, email as string))
    let dbuser;
if(isuser.length === 0 ){
    const newuser= await db.insert(usersTable).values({
        clerkId:user?.id,
        email: email

    }
).returning()
dbuser=newuser[0]

}else{
    dbuser=isuser[0]
}

return NextResponse.json({dbuser})

    
}