const http = require("http");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const admitData = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const path = require('path')

app.set('view engine', 'pug');


app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', admitData.routes);

app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', {pageTitle: 'Page Not Found'});
})

app.listen(3000);
