const express = require("express");

// const path = require("path");

const app = express();

// app.use(express.json());
// app.use(express.urlencoded());

// set the view engine to ejs
// app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");
app.use(express.static("public"));

//

app.get("/xyz.ejs", function (req, res) {
	res.render("xyz.ejs");
});

app.get("/new.ejs", function (req, res) {
	res.render("new.ejs");
});
//______________________________________________________pages_______________________start___________________________________________________
//______________________________________________home page_____________________________________________________________
app.get("/home.ejs", function (req, res) {
	res.render("home.ejs");
});
//________________login_________________________________
app.get("/login.ejs", function (req, res) {
	res.render("login.ejs");
});
//_______________________signin_________________________
app.get("/signin.ejs", function (req, res) {
	res.render("signin.ejs");
});
//___________________________________________bag___________________
app.get("/bag.ejs", function (req, res) {
	res.render("bag.ejs");
});
//______________________________________address_______________
app.get("/address.ejs", function (req, res) {
	res.render("address.ejs");
});
//_______________________________________products__________________________
app.get("/products.ejs", function (req, res) {
	res.render("products.ejs");
});
//______________________________________buyproduct_____________________________
app.get("/buyproduct.ejs", function (req, res) {
	res.render("buyproduct.ejs");
});

//__________________________________payment__________________
app.get("/payment.ejs", function (req, res) {
	res.render("payment.ejs");
});
// ________________________________payment scuessfull_______________________________/
app.get("/successfulPayment.ejs", function (req, res) {
	res.render("successfulPayment.ejs");
});
//________________________________bot_____________________
//
app.get("/bot.ejs", function (req, res) {
	res.render("bot.ejs");
});

//

// ____________________________________________________________//server___________________________________________________________
app.listen(2300, async function () {
	// await connect();
	console.log("listening on port 2300");
});
