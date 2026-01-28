import Order from "../models/Order"


const createOrder = (data, session) => {
    return Order.create([data], {session});
};

export default createOrder