const express = require('express');
const router = express.Router();

const HomeController = require('../controllers/HomeController');
const uploadProductController = require('../controllers/uploadProductController');
const UserController = require('../controllers/UserController');
const allProductsController = require('../controllers/allProductsController');


router.get('/', HomeController.index);
router.post('/uploadProducts', uploadProductController.uploadProduct);
router.get('/allProducts', allProductsController.allproducts);
router.post('/signup', UserController.signup);
router.post('/login', UserController.login);

module.exports = router;