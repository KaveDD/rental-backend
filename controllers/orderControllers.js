const asyncHandler = require('express-async-handler');
const Order = require('../models/ordersModel');

const getOrders = asyncHandler(async (req,res) => {
        const orders = await Order.find()
        res.json(orders);
    }
);


const createOrders = asyncHandler(async(req,res) =>{
    const {pickupLocation,pickupDate,returnDate,packageType,vehicleType} = req.body;

    if (!pickupLocation || !pickupDate || !returnDate || !packageType || !vehicleType){
        console.log("validation")
        res.status(400).json({error : 'Please fill all the fields'});
        throw new Error("Please fill all the fields");
    }
    else{
        const order = new Order ({pickupLocation, pickupDate, returnDate, packageType, vehicleType});

        const createdOrder = await order.save();
        res.status(201).json(createdOrder);

    }


    
});

const getOrderById = asyncHandler(async(req,res) => {
    const order = await Order.findById(req.params.id);

    if(order){
        res.json(order);
    }
    else{
        res.status(404).json({message: "Order not found"});
    }
});

const updateOrder = asyncHandler(async(req,res) => {
    const {pickupLocation, pickupDate, returnDate, packageType, vehicleType} = req.body;

    const order = await Order.findById(req.params.id);

    if(order){
        order.pickupLocation = pickupLocation;
        order.pickupDate = pickupDate;
        order.returnDate = returnDate;
        order.packageType = packageType;
        order.vehicleType = vehicleType;

        const updatedOrder = await order.save();
        res.json(updatedOrder);
    }
    else{
        res.status(404);
        throw new Error("Order not found");
    }

});

const deleteOrder = asyncHandler(async(req,res) => {
    const order = await Order.findById(req.params.id);

    if (order){
        await order.remove();
        res.json({message: "Order canceled"});
    }
    else{
        res.status(404);
        throw new Error("Order not found");
    }
});

module.exports = {getOrders, createOrders, getOrderById, updateOrder, deleteOrder};
