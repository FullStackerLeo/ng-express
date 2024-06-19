// // index.js
const express = require("express");
const router = express.Router();
const rootRoutes = require('./root.routes.js')
const apiRoutes  = require('./api.routes.js')

router.use('/',rootRoutes);
router.use('/api', apiRoutes);

module.exports = router;

