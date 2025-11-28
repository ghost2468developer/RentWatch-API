import dotenv from "dotenv"
dotenv.config()

export const env = {
  PORT: process.env.PORT || 4000,
  DATABASE_URL: process.env.DATABASE_URL!,
  JWT_SECRET: process.env.JWT_SECRET || "supersecretkey",
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "9000d"
}