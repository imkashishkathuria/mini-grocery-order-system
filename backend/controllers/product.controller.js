import getProducts from '../services/product.service.js'

const getProductsControllers = async (req, res) => {
    const products = await getProducts();
    res.json(products);
}

export default getProductsControllers