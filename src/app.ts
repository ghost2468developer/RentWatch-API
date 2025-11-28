import express from "express"
import cors from "cors"
import morgan from "morgan"

// Routes
import userRoutes from "./modules/user/routes"

// Middlewares
import { errorHandler } from "./middlewares/errorHandler"

const app = express();

// Middlewares
app.use(cors());
app.use(express.json())
app.use(morgan("dev")) // logs requests

// API Routes
app.use("/api/users", userRoutes)
// app.use("/api/properties", propertyRoutes)
// app.use("/api/leases", leaseRoutes)
// app.use("/api/payments", paymentRoutes)
// app.use("/api/disputes", disputeRoutes)

// Health Check
app.get("/", (req, res) => {
  res.send("🚀 RentWatch API is running")
})

// Error handling middleware
app.use(errorHandler)

export default app