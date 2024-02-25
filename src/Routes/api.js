
const express = require('express');
const { createProduct, ProductList,ProductUpdate, ProductDelete,ProductDetails, ProductByBrand, ProductByCategory, ProductBySearch } = require('../controllers/ProductControler');
const { UserOTP, VerifyOTPLogin, UserLogout, UpdateUser, ReadUser, SignUp } = require('../controllers/UserController');
const { AuthVerification } = require('../middlewares/AuthVerification');

const router = express.Router()



//creating data
router.post('/CreateProduct', createProduct)


router.post('/ProductUpdate/:productId', ProductUpdate)
router.post('/ProductDelete/:productId', ProductDelete)


//getting data
//router.get('/ProductList/:pageNo/:perPage/:searchKeyword', ProductList)
router.get('/ProductList',AuthVerification, ProductList)
router.get('/ProductDetails/:productId', AuthVerification,ProductDetails)
router.get('/ProductByBrand/:brandName', AuthVerification,ProductByBrand)
router.get('/ProductByCategory/:categoryName', AuthVerification,ProductByCategory)
router.get('/ProductBySearch/:searchKeyWord', AuthVerification,ProductBySearch)

 
//user apis 
router.post('/SignUp', SignUp)

router.post('/Login/:email/:password', UserOTP)
router.post('/VerifyOtp/:email/:otp', VerifyOTPLogin)
router.post('/Logout', AuthVerification,UserLogout)
router.post('/UpdateUser', AuthVerification,UpdateUser) 
router.get('/ReadUser',AuthVerification, ReadUser)

 
 





module.exports = router;



 
 
































