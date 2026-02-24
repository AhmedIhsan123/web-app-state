import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import session from "express-session";

import indexRoutes from "./routers/index.routes.js";
import stateRoutes from "./routers/state.routes.js";
import multiFormRoutes from "./routers/form.routes.js";
import statusRoutes from "./routers/status.routes.js";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src", "views"));

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(
	session({
		secret: "95d0dbdf-e2cc-43fd-80c4-b4cd0a0b6f39",
		resave: "false",
		saveUninitialized: true,
		cookie: {
			httpOnly: true,
			maxAge: 20 * 60 * 1000,
		},
	}),
);

// Middleware to attatch cookie value
app.use((req, res, next) => {
	req.theme = req.cookies.theme || "light";
	req.bodyClass = req.theme === "dark" ? "dark" : "light";
	next();
});

app.use(indexRoutes);
app.use(stateRoutes);
app.use(multiFormRoutes);
app.use(statusRoutes);

export default app;
