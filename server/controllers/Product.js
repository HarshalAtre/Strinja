const Product = require("../models/Product");
const { cloudinary } = require("../cloudinary");

module.exports.createProduct = async (req, res) => {
    const product = new Product(req.body.product);
    product.title = 
    product.images = req.files.map((file) => ({
        url: file.path,
        filename: file.filename,
    }));
    await product.save();
    console.log(product);
    req.flash("success", "Successfully created a new product!");
    res.redirect('/');
};
