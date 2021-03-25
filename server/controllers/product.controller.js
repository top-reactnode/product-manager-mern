const { Product } = require("../models/product.model");

module.exports.getProducts = (req, res) => {
  Product.find({})
    .then((product) => res.json(product))
    .catch((err) => res.json(err));
};

module.exports.getProduct = (req, res) => {
  Product.find({ _id: req.params.id })
    .then((product) => res.json(product))
    .catch((err) => res.json(err));
};

module.exports.createProduct = (req, res) => {
  const { title, price, description } = req.body;

  Product.create({
    title,
    price,
    description,
  })
    .then((product) => res.json(product))
    .catch((err) => res.json(err));
};

module.exports.updateProduct = (req, res) => {
  Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedProduct) => res.json(updatedProduct))
    .catch((err) => res.json(err));
};

module.exports.deleteProduct = (req, res) => {
  Product.deleteOne({ _id: req.params.id })
    .then((deletedProduct) => res.json(deletedProduct))
    .catch((err) => res.json(err));
};
