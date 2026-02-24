import express from "express";

const router = express.Router();

router.get("/signup/step/1", (req, res) => {
	req.session.signup = {};
	res.render("step1", {
		signup: {},
		theme: req.theme,
		bodyClass: req.bodyClass,
	});
});

router.post("/signup/step/1", (req, res) => {
	req.session.signup.firstName = req.body.firstName;
	req.session.signup.lastName = req.body.lastName;

	res.redirect("/signup/step/2");
});

router.get("/signup/step/2", (req, res) => {
	res.render("step2", {
		signup: {},
		theme: req.theme,
		bodyClass: req.bodyClass,
	});
});

router.post("/signup/step/2", (req, res) => {
	req.session.signup.email = req.body.email;
	req.session.signup.favoriteColor = req.body.favoriteColor;
	res.redirect("/signup/step/3");
});

router.get("/signup/step/3", (req, res) => {
	res.render("step3", {
		signup: {},
		theme: req.theme,
		bodyClass: req.bodyClass,
	});
});

router.post("/signup/step/3", (req, res) => {
	req.session.signup.notes = req.body.notes;
	res.redirect("/signup/done");
});

router.get("/signup/done", (req, res) => {
	res.render("done", {
		signup: req.session.signup,
		theme: req.theme,
		bodyClass: req.bodyClass,
	});
});

export default router;
