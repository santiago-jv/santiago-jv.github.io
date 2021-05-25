const express = require("express");
const morgan = require("morgan");
const app = express();
const hbs = require("express-handlebars");
const path = require("path");
const { extname } = require("path");
//initialize
app.set("port", process.env.PORT || 3000);
//settings
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  hbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
    helpers: require("./lib/handlebars"),
  })
);
//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({extended:false}))
app.use(express.json())
//global variables
app.use((req, res, next) =>{
	next();
})
//Routes
app.use(require("./routes/index"));
app.use('/students', require("./routes/links"))
//Public
app.use(express.static(path.join(__dirname,'public')))

//Starting server

app.listen(app.get("port"), () => console.log("Server is started"));
