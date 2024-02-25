


const mongoose = require('mongoose')


const productSchema = mongoose.Schema({
    
    name: { type: String, required: true },
    price: { type: String },
    special_price: { type: String },
    description: { type: String },
    image: { type: String },
    category: { type: String },
    subcategory: { type: String },
    remark: { type: String },
    brand: { type: String },
    shop: { type: String },
    shop_name: { type: String },
    star: { type: String },
    product_code: { type: String },
    stock: { type: String,default:'No' }

}, { versionKey: false })

 


const ProductModel = mongoose.model('products', productSchema)





module.exports = ProductModel;





const dd = {


    "title": "{ type: String }",
    "price": "{ type: String }",
    "special_price": "{ type: String }",
    "image": "{ type: String }",
    "category": "{ type: String }",
    "subcategory": "{ type: String }",
    "remark": "{ type: String }",
    "brand": "{ type: String }",
    "shop": "{ type: String }",
    "shop_name": "{ type: String }",
    "star": "{ type: String }",
    "product_code": "{ type: String }",
    "stock": "{ type: String }"

}







