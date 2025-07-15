const mongoose = require('mongoose');

const pizzaVarietySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  imageUrl: { type: String },
  baseOptions: [{ type: String }],
  sauceOptions: [{ type: String }],
  cheeseOptions: [{ type: String }],
  veggieOptions: [{ type: String }],
  meatOptions: [{ type: String }],
}, { timestamps: true });

const PizzaVariety = mongoose.model('PizzaVariety', pizzaVarietySchema);
module.exports = PizzaVariety;
