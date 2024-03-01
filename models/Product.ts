import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
    name: String,
    price: Number,
    image: String,
    isFeatured: {
        type: Boolean,
        default: false,
    },
});

const Product = models.Product || model("Product", ProductSchema);
export default Product;
