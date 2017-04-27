var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

//CREATE
connection.query("INSERT INTO products SET ?", {
  flavor: "Rocky Road",
  price: 3.00,
  quantity: 50
}, function(err, res) {});

//UPDATE
connection.query("UPDATE products SET ? WHERE ?", [{
  quantity: 100
}, {
  flavor: "Rocky Road"
}], function(err, res) {});

connection.query("DELETE FROM products WHERE ?", {
  flavor: "strawberry"
}, function(err, res) {});

connection.query("SELECT * FROM products", function(err, res) {
  if (err) throw err;
  console.log(res);
});


