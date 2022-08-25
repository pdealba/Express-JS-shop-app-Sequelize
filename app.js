const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");

const shopRoutes = require("./routes/shop");
const admitRoutes = require("./routes/admin");
const errorController = require("./controllers/error");

const sequelize = require("./util/database");

/*
const expressHbs = require('express-handlebars')
app.engine('hbs', expressHbs({extname:'hbs', defaultLayout: 'main-layout'}));
app.set('view engine', 'hbs');

app.set('view engine', 'pug');
*/

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", admitRoutes);

app.use(shopRoutes);

app.use(errorController.get404);

sequelize
  .sync()
  .then((result) => {
    // console.log(result);
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
