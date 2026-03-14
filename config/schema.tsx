import { date, integer, json, pgTable, text, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  clerkId: varchar("clerk_id").notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  credits: integer().default(5)
});

export const Projectdetail= pgTable("projectdetails",{
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  ProjectId: varchar().notNull().unique(),
  UserInput:varchar(),
  device:varchar(),
  CreatedOn: date().defaultNow(),
  config: json(),
  projectname:varchar(),
  theme:varchar(),
  projectvisualdiscription:varchar(),
  UserEmail: varchar().notNull()


})

export const systemconfigue= pgTable('systemconfigue',{
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  projectId:varchar().references(()=>Projectdetail.ProjectId),
  screenID:varchar(),
  screeName:varchar(),
  purpose:varchar(),
  screendescription:varchar(),
  code:text()

})