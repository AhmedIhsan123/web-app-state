import express from "express";

const router = express.Router();

/* ---------------------------
   Cookies Example
---------------------------- */

router.get("/cookies", (req, res) => {
	res.render("cookies", {
		theme: req.cookies.theme,
		bodyClass: "",
		themeClicks: "",
	});
});

router.post("/state/cookies", (req, res) => {
	const nextTheme = req.cookies.theme === "dark" ? "light" : "dark";

	res.cookie("theme", nextTheme, {
		maxAge: 5 * 60 * 1000,
	});

	res.cookie("me", "Ahmed", {
		maxAge: 5 * 60 * 1000,
	});

	res.redirect("/cookies");
});

/* ---------------------------
   Profile Session Example
---------------------------- */

router.get("/profile", (req, res) => {
	res.render("profile", {
		theme: req.theme,
		bodyClass: req.bodyClass,
		themeClicks: req.themeClicks,
		profile: {},
	});
});

router.post("/state/profile", (req, res) => {
	res.redirect("/profile");
});

export default router;
