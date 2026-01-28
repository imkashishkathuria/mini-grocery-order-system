import express from 'express'

const router = express.Router();

import productController from '../controllers/product.controller'
import orderController from '../controllers/order.controller'

router.get("/products", productController.getProducts);
router.post("/orders", orderController.placeOrder);

export default router