import service from '../services/product.service'

const getProducts = async (req, res) => {
    const products = await service.getProducts();
    res.json(products);
}

export default getProducts