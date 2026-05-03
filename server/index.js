import express from "express";
import cors from "cors";
import "#utils/loadEnvironment";
import apiRouter from "#routers/index.route";
import "#db/connection";


const PORT = process.env.PORT || 5000;
const app = express();

// Enable CORS with credentials support
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

/// Routers
app.use("/", apiRouter);

// Listening to the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
