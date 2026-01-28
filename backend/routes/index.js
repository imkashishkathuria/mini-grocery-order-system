import express from 'express'

const router = express.Router();


import getProducts from '../controllers/product.controller.js';
import placeOrder from '../controllers/order.controller.js';

router.get("/products", getProducts);
router.post("/orders", placeOrder);

export default router