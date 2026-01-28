import Product from "../models/Product"


const getAllProducts = () => {
    return Product.find();
}


const getProductById = (id, session) => {
    return Product.findById(id).session(session);
};

const decreaseStock = (id, qty, session) => {
    return Product.findOneAndUpdate(
        { _id: id, stock: {$gte: qty} },
        { $inc: {stock: -qty} },
        { new: true, session }

    );
};

export default {
  getAllProducts,
  getProductById,
  decreaseStock
};
