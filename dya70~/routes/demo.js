const express = require("express");
const bcrypt = require("bcryptjs");

const db = require("../data/database");

const router = express.Router();

router.get("/", function (req, res) {
  res.render("welcome");
});

router.get("/signup", function (req, res) {
  let sessionInputData = req.session.inputData;

  if (!sessionInputData) {
    sessionInputData = {
      hasError: false,
      email: "",
      confirmEmail: "",
      password: "",
    };
  }

  req.session.inputData = null;

  res.render("signup", { inputData: sessionInputData });
});

router.get("/login", function (req, res) {
  res.render("login");
});

router.post("/signup", async function (req, res) {
  const userData = req.body;
  const enteredEmail = userData.email; // userData['email'] '-'를 사용할 수 없으므로 대체 표기법 [] 사용
  const enteredConfirmEmail = userData["confirm-email"];
  const enteredPassword = userData.password;

  if (
    !enteredEmail ||
    !enteredConfirmEmail ||
    !enteredPassword ||
    enteredPassword.trim().length < 6 || //trim: 앞뒤공백제거
    enteredEmail !== enteredConfirmEmail ||
    !enteredEmail.includes("@")
  ) {
    req.session.inputData = {
      hasError: true,
      message: "잘못된 데이터입니다.",
      email: enteredEmail,
      confirmEmail: enteredConfirmEmail,
      password: enteredPassword,
    }; //redirect 전에 세션에 해당 데이터 저장. 인증과 딱히 관련은 없음.

    req.session.save(function () {
      res.redirect("/signup");
    });
    return;
    // return res.render('signup');
  }

  const existingUser = await db
    .getDb()
    .collection("users")
    .findOne({ email: enteredEmail });

  if (existingUser) {
    console.log("이미 가입한 이메일입니다.");
    return res.redirect("/signup");
  }

  const hashedPassword = await bcrypt.hash(enteredPassword, 12); //12 -> 해싱강도

  const user = {
    email: enteredEmail,
    password: hashedPassword,
  };

  await db.getDb().collection("users").insertOne(user);

  res.redirect("/login");
});

router.post("/login", async function (req, res) {
  const userData = req.body;
  const enteredEmail = userData.email;
  const enteredPassword = userData.password;

  const existingUser = await db
    .getDb()
    .collection("users")
    .findOne({ email: enteredEmail });

  if (!existingUser) {
    console.log("로그인을 할 수 없습니다!");
    return res.redirect("/login");
  }

  const passwordsAreEqual = await bcrypt.compare(
    enteredPassword,
    existingUser.password
  );

  if (!passwordsAreEqual) {
    console.log("로그인을 할 수 없습니다! - 비밀번호가 일치하지 않습니다!");
    return res.redirect("/login");
  }

  req.session.user = { id: existingUser._id, email: existingUser.email };
  req.session.isAuthenticated = true;
  req.session.save(function () {
    res.redirect("/profile");
  });
});

router.get("/admin", async function (req, res) {
  if (!req.session.isAuthenticated) {
    // if (!req.session.user)
    return res.status(401).render("401"); // 401: 액세스 거부
  }

  const user = await db
    .getDb()
    .collection("users")
    .findOne({ _id: req.session.user.id });

  if (!user || !user.isAdmin) {
    res.status(403).render("403");
  }

  res.render("admin");
});

router.get("/profile", function (req, res) {
  if (!req.session.isAuthenticated) {
    // if (!req.session.user)
    return res.status(401).render("401"); // 401: 액세스 거부
  }
  res.render("profile");
});

router.post("/logout", function (req, res) {
  req.session.user = null;
  req.session.isAuthenticated = false;
  res.redirect("/");
});

module.exports = router;
