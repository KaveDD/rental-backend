const express = require("express");
const { createOrders, getOrders, getOrderById, updateOrder, deleteOrder} = require('../controllers/orderControllers');
const router = express.Router();

router.route("/").get(getOrders);
router.route("/create").post(createOrders);
router.route("/:id").get(getOrderById).put(updateOrder).delete(deleteOrder);






module.exports = router;
