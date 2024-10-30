const express = require("express");
const router=express.Router();
const adminController=require("../controllers/admin/adminControllers");
const auth=require("../middlewares/auth");
const customerController=require("../controllers/admin/customerController");
const categoryController=require("../controllers/admin/categoryControllers");
const brandController = require("../controllers/admin/brandControllers");
const productController=require("../controllers/admin/productControllers");
const multer = require("multer");
const storage = require("../helpers/multer");
const uploads = multer({storage:storage});



router.get("/pageerror",adminController.pageerror)
router.get("/login",adminController.loadlogin);
router.post("/login",adminController.login);
router.get("/",adminController.loadDashboard);
router.get("/logout",adminController.logout);

//customer routes
router.get("/users",auth.adminAuth,customerController.customerInfo);
router.get("/blockCustomer",auth.adminAuth,customerController.customerBlocked);
router.get("/unblockCustomer",auth.adminAuth,customerController.customerBlocked);
//category routes
router.get("/category",auth.adminAuth,categoryController.categoryInfo);
router.post("/addCategory",auth.adminAuth,categoryController.addCategory);
router.post("/addCategoryOffer",auth.adminAuth,categoryController.addCategoryOffer)
router.post("/removeCategoryOffer",auth.adminAuth,categoryController.removeCategoryOffer);
router.get("/listCategory",auth.adminAuth,categoryController.getlistCategory);
router.get("/unlistCategory",auth.adminAuth,categoryController.getlistCategory);
router.get("/editCategory",auth.adminAuth,categoryController.getEditCategory);
router.post("/editCategory",auth.adminAuth,categoryController.EditCategory)

//Brand routes
router.get("/brands",auth.adminAuth,brandController.getBrands);
router.post("/addBrand",auth.adminAuth,uploads.single("image"),brandController.addBrand);
router.get("/blockBrand",auth.adminAuth,brandController.blockBrand);
router.get("/deleteBrand",auth.adminAuth,brandController.deleteBrand);

//product routes
router.get("/addProducts",auth.adminAuth,productController.getProductAddPage);
router.post("/addProducts",auth.adminAuth,uploads.array("images",4),productController.addProducts);
router.get("/products",auth.adminAuth,productController.getAllProducts);
router.post("/addProductOffer",auth.adminAuth,productController.addProductOffer);
router.post("/removeProductOffer",auth.adminAuth,productController.removeProductOffer);
router.get("/blockProduct",auth.adminAuth,productController.blockProduct);
router.get("/editProduct",auth.adminAuth,productController.getEditProduct)
router.post("/editProduct",auth.adminAuth,uploads.array("images",4),productController.editProduct);
router.post("/deleteImage",auth.adminAuth,productController.deleteSingleImage);




module.exports=router;