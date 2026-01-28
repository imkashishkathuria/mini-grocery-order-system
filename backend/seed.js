// import mongoose from "mongoose";
import connectDB from "./db/mongo.js";
import Product from "./models/Product.js";


connectDB();

const seed = async () => {
    await Product.deleteMany();

    await Product.insertMany([
        { name: "Apple", price: 20, stock: 50 },
        { name: "Milk", price: 40, stock: 30 },
        { name: "Bread", price: 25, stock: 20 },
        { name: "Banana", price: 10, stock: 100 },
        { name: "Orange", price: 15, stock: 60 },
        { name: "Mango", price: 50, stock: 25 },
        { name: "Rice", price: 60, stock: 80 },
        { name: "Wheat Flour", price: 45, stock: 70 },
        { name: "Sugar", price: 42, stock: 55 },
        { name: "Salt", price: 20, stock: 90 },
        { name: "Cooking Oil", price: 120, stock: 40 },
        { name: "Butter", price: 90, stock: 35 },
        { name: "Cheese", price: 110, stock: 25 },
        { name: "Eggs", price: 70, stock: 50 },
        { name: "Tomato", price: 18, stock: 65 },
        { name: "Potato", price: 22, stock: 85 },
        { name: "Onion", price: 30, stock: 75 },
        { name: "Carrot", price: 28, stock: 60 },
        { name: "Cabbage", price: 26, stock: 40 },
        { name: "Spinach", price: 15, stock: 30 },
        { name: "Tea Powder", price: 140, stock: 20 },
        { name: "Coffee", price: 160, stock: 15 },
        { name: "Biscuits", price: 25, stock: 100 },
        { name: "Noodles", price: 35, stock: 45 },
        { name: "Soap", price: 30, stock: 90 },
        { name: "Shampoo", price: 180, stock: 25 },
        { name: "Toothpaste", price: 85, stock: 40 },
    ]);

    console.log("Products seeded");
    process.exit();

} 
seed();