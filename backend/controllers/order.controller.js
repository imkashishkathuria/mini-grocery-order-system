import placeOrder from '../services/order.service.js'

const placeOrderController = async (req, res) => {
    try {
        const result = await placeOrder(req.body);
        res.json(result);
    } catch (error) {
        res.status(400).json( { error: error.message });
    }
}

export default placeOrderController