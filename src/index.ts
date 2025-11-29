import express from "express"
import cors from "cors"
import morgan from "morgan"

// Routes
import userRoutes from "./modules/user/routes"
// import propertyRoutes from "./modules/property/routes"
// import leaseRoutes from "./modules/lease/routes"
// import paymentRoutes from "./modules/payment/routes"
// import disputeRoutes from "./modules/dispute/routes"

// Middlewares
import { errorHandler } from "./middlewares/errorHandler"
import { env } from "./config/env"

const app = express()

// Middlewares
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

// API Router
app.use("/api/users", userRoutes)
// app.use("/api/properties", propertyRoutes)
// app.use("/api/leases", leaseRoutes)
// app.use("/api/payments", paymentRoutes)
// app.use("/api/disputes", disputeRoutes)

// Health check
app.get("/", (req, res) => {
  res.send("🚀 RentWatch API is running")
})

// Error handling middleware
app.use(errorHandler)

// Start the server
app.listen(env.PORT, () => {
  console.log(`🚀 RentWatch API running on port ${env.PORT}`)
})