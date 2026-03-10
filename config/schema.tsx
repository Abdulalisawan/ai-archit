import { date, integer, json, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  clerkId: varchar("clerk_id").notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  credits: integer().default(5)
});

export const Projectdetail= pgTable("projectdetails",{
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  ProjectId: varchar().notNull(),
  UserInput:varchar(),
  device:varchar(),
  CreatedOn: date().defaultNow(),
  config: json(),
  UserEmail: varchar().notNull()


})
