import mongoose from "mongoose"
import productRepo from "../repositories/product.repository"
import orderRepo from '../repositories/order.repository'


const placeOrder = async ({ productId, quantity }) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const product = await productRepo.getProductById(productId, session);

        if(!product) throw new Error("Product not found");

        const updatedProduct = await productRepo.decreaseStock(
            productId,
            quantity,
            session
        );

        if(!updatedProduct) throw new Error("Insufficient Stock");

        const totalPrice = product.price * quantity;

        await orderRepo.createOrder(
            { productId, quantity, totalPrice },
            session
        );

        await session.commitTransaction();
        return { message: "Order placed successfully" }

    } catch (error) {
        await session.abortTransaction();
        throw error;
    }
    finally{
        session.endSession();
    }
};

export default placeOrder