import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  clerkId: varchar("clerk_id").notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  credits: integer().default(5)
});
