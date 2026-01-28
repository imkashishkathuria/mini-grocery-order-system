import service from '../services/order.service'

const placeOrder = async (req, res) => {
    try {
        const result = await service.placeOrder(req.body);
        res.json(result);
    } catch (error) {
        res.status(400).json( { error: error.message });
    }
}

export default placeOrder