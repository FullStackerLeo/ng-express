// root.routes.js
// Express Middleware: When a request hits a specific route, Express middleware handles it. This middleware might include parsing the request body, checking for authentication, etc.
// Route Matching: Express then attempts to match the request URL to a defined route in your router object.
// Controller Function Invocation: If a matching route is found, the corresponding controller function is invoked.
// req and res Injection: Express automatically injects the req (request) and res (response) objects as the first two arguments to the controller function.
// Controller Logic: The controller function can access request data from req and manipulate the response using res. These objects provide access to request body data, headers, parameters, cookies, and methods to send responses with status codes, headers, and content.
const express = require('express');
const router = express.Router();
// const userController = require("../controllers/user.controller");

router.route('/test').get((request, response) => { response.send('<h1>Hello my World!</h1>') })

// router.post("/login",    userController.userLogin)
// router.post("/register", userController.userRegister)

module.exports = router;