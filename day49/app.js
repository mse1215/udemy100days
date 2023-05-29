const fs = require("fs");
const path = require("path");

const express = require("express");
const uuid = require("uuid");

const resData = require("./util/restaurant-data");
const defaultRoutes = require("./routes/defalut");
const restaurantRoutes = require("./routes/restaurants");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs"); //express 앱에 대한 특정 옵션을 설정할 수 있는 method

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use("/", defaultRoutes);
app.use("/restaurants", restaurantRoutes);

app.use(function (req, res) {
  res.status(404).render("404");
});

app.use(function (error, req, res, next) {
  res.status(500).res.render("500");
});

app.listen(3000);
//listen: 특정 포트에서 들어오는 네트워크 트래픽에 대해 들어오는 요청의 수신 가능.
