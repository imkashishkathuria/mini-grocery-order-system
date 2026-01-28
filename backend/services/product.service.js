import getAllProducts from '../repositories/product.repository.js'


const getProducts = () => {
    return getAllProducts.getAllProducts();
};

export default getProducts