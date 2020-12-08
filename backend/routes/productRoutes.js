import express from "express"
// import asyncHandler from "express-async-handler"
import { getProductById, getProducts, deleteProduct, updateProduct, createProduct, createProductReview, getTopProducts } from "../controllers/productController.js"
import { admin, protect } from "../middleware/authMiddleware.js"
// import Product from "../models/productModel.js"

const router = express.Router()
router.route("/top")
  .get(getTopProducts)
router.route("/")
  .get(getProducts)
  .post(protect, admin, createProduct)
router.route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct)

router.route("/:id/reviews")
  .post(protect, createProductReview)


//Implementation withour router controller
//@description Fetch all products
//@route GET /api/products
//@access Public
// router.get("/", asyncHandler(async (req, res) => {
//   try {
//     const products = await Product.find({})
//     res.json(products)
//   } catch (error) {
//     res.status(404)
//     throw new Error("Products not found")
//   }
// }))

//Implementation withour router controller
//@description Fetch single product
//@route GET /api/products/:id
//@access Public
// router.get("/:id", asyncHandler(async (req, res) => {
//   const product = await Product.findById(req.params.id)
//   if (product) {
//     res.json(product)
//   } else {
//     res.status(404);
//     throw new Error("Product not found")
//   }
// }))
export default router