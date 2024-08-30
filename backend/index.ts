import express from "express";
import dotenv from "dotenv";
import routes from "./routes/routes";
import passport from "passport";
import session from "express-session";
import "./config/passport";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET || "your-secret-key",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Use routes
app.use("/", routes);

// Start the server
app
  .listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  })
  .on("error", (error) => {
    // gracefully handle error
    throw new Error(error.message);
  });
