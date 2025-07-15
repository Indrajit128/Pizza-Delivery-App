const express = require('express');
const PizzaVariety = require('../models/PizzaVariety');
const Inventory = require('../models/Inventory');
const Order = require('../models/Order');
const router = express.Router();

// Get all pizza varieties
router.get('/varieties', async (req, res) => {
  try {
    const varieties = await PizzaVariety.find();
    res.json(varieties);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get inventory status (admin)
router.get('/inventory', async (req, res) => {
  try {
    const inventory = await Inventory.find();
    res.json(inventory);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update inventory (admin)
router.put('/inventory/:id', async (req, res) => {
  try {
    const { quantity, threshold } = req.body;
    const inventoryItem = await Inventory.findById(req.params.id);
    if (!inventoryItem) return res.status(404).json({ message: 'Inventory item not found' });

    if (quantity !== undefined) inventoryItem.quantity = quantity;
    if (threshold !== undefined) inventoryItem.threshold = threshold;

    await inventoryItem.save();
    res.json(inventoryItem);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Place an order
router.post('/order', async (req, res) => {
  try {
    const { user, pizzaBase, sauce, cheese, veggies, meat, totalPrice } = req.body;

    // Create order
    const order = new Order({
      user,
      pizzaBase,
      sauce,
      cheese,
      veggies,
      meat,
      totalPrice,
      paymentStatus: 'paid',
      orderStatus: 'order received',
    });
    await order.save();

    // Update inventory quantities
    const updateInventory = async (itemType, items) => {
      if (!items) return;
      for (const item of items) {
        const invItem = await Inventory.findOne({ itemType, name: item });
        if (invItem) {
          invItem.quantity = Math.max(0, invItem.quantity - 1);
          await invItem.save();
        }
      }
    };

    await updateInventory('base', [pizzaBase]);
    await updateInventory('sauce', [sauce]);
    await updateInventory('cheese', [cheese]);
    await updateInventory('veggie', veggies);
    await updateInventory('meat', meat);

    res.json({ message: 'Order placed successfully', order });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get orders (admin)
router.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find().populate('user', 'name email');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update order status (admin)
router.put('/order/:id/status', async (req, res) => {
  try {
    const { orderStatus } = req.body;
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: 'Order not found' });

    order.orderStatus = orderStatus;
    await order.save();

    res.json(order);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
