import "dotenv/config";
import express from "express";
import expressEjsLayouts from "express-ejs-layouts";

const app = express();

// Middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set view engine
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(expressEjsLayouts);
app.set("layout", "layouts/main");

// Routers
app.use("/", webRouter);

// export app
export default app;
