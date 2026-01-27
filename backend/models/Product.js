import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    Stock: Number,
})

export default mongoose.model("Product", productSchema)