const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const protectAPIsMiddleware = require('../middleware/protectAPI');

router.use(bodyParser.json());
// router.use(protectAPIsMiddleware);
router.use(bodyParser.urlencoded({ extended: false }));

// * IMPORTING CONTROLLERS - SIMULATION 😎
const dummyController = require('../controller/dummy-controller')

// * CREATING ROUTES - AUTHENTICATION 😎 ============================================
router.route('/test').get(dummyController.fetchDataFromExternalApi);

module.exports = router;

