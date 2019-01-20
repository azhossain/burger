var express = require("express");
var app = express();

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
	defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.use(express.static('./public'));

var PORT = process.env.PORT || 8080;
 
require("./controllers/burgers_controller.js")(app);

app.listen(port, function () {
    console.log("Express app listening on" +'port');
});
