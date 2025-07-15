const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  itemType: { type: String, enum: ['base', 'sauce', 'cheese', 'veggie', 'meat'], required: true },
  name: { type: String, required: true },
  quantity: { type: Number, required: true, default: 0 },
  threshold: { type: Number, required: true, default: 20 },
}, { timestamps: true });

const Inventory = mongoose.model('Inventory', inventorySchema);
module.exports = Inventory;
