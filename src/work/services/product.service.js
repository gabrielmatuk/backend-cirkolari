import ProductRepository from "../repositories/product.repository.js";

const insertProduct = async (product) => {
  return await ProductRepository.insertProduct(product);
};

const showProducts = async () => {
  return await ProductRepository.showProducts();
};

const showProduct = async (id) => {
  return await ProductRepository.showProduct(id);
};

const updateProduct = async (product) => {
  return await ProductRepository.updateProduct(product);
};

const updateStatusProduct = async (productStatus) => {
  return await ProductRepository.productDisponibility(productStatus);
};

export default {
  insertProduct,
  showProduct,
  showProducts,
  updateProduct,
  updateStatusProduct,
};
