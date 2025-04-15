const Product = require('../models/productModel')

const create = async (req, res) => {
  const product = await Product.create(req.body)
  res.json(product)
}

const readAll = async (req, res) => {
  const products = await Product.find()
  res.json(products)
}

const readOne = async (req, res) => {
  const product = await Product.findById(req.params.id)
  res.json(product)
}

const update = async (req, res) => {
  const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.json(updated)
}

const remove = async (req, res) => {
  const deleted = await Product.findByIdAndDelete(req.params.id)
  res.json(deleted)
}

module.exports = { create, readAll, readOne, update, remove }
