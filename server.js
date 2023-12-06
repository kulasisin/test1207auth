const jsonServer = require("json-server");
const auth = require("json-server-auth");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
server.db = router.db;
server.use(middlewares);
server.use(jsonServer.bodyParser);
// server.post("/login", (req, res) => {
//   const { email, password } = req.body;
//   const users = router.db.get("users").value();
//   const user = users.find(
//     (user) => user.email === email && user.password === password
//   );

//   if (user) {
//     res.status(200).jsonp({ message: "Login successful", user });
//   } else {
//     res.status(401).jsonp({ message: "Invalid credentials" });
//   }
// });
// server.use(middlewares);
// server.use(jsonServer.bodyParser);
server.use(auth);
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});

// const jsonServer = require("json-server");
// const auth = require("json-server-auth");

// const app = jsonServer.create();
// const router = jsonServer.router("db.json");

// // /!\ Bind the router db to the app
// app.db = router.db;

// // You must apply the auth middleware before the router
// app.use(auth);
// app.use(router);
// app.listen(3000);
