import getAllProducts from '../repositories/product.repository'


const getProducts = () => {
    return getAllProducts.getAllProducts();
};

export default getProducts