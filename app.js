const http = require("http");
const express = require("express");
const app = express();
const path = require("path");
const shopRoutes = require("./routes/shop");
const admitData = require("./routes/admin");

const bodyParser = require("body-parser");

//const expressHbs = require('express-handlebars')
//app.engine('hbs', expressHbs({extname:'hbs', defaultLayout: 'main-layout'}));
//app.set('view engine', 'hbs');

//app.set('view engine', 'pug');

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", admitData.routes);

app.use(shopRoutes);

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(3000);
