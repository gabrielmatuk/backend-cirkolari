import ProductService from "../services/product.service.js";

const insertProduct = async (req, res, next) => {
  try {
    let product = req.body;
    if (!product.nome || !product.descricao || !product.disponibilidade) {
      throw new Error("Nome, Descrição e Disponibilidade são obrigatórios.");
    }
    product = await ProductService.insertProduct(product);
    res.send(product);
  } catch (err) {
    next(err);
  }
};

const showProducts = async (req, res, next) => {
  try {
    res.send(await ProductService.showProducts());
  } catch (err) {
    next(err);
  }
};

const showProduct = async (req, res, next) => {
  try {
    res.send(await ProductService.showProduct(req.params.id));
  } catch (err) {
    next(err);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    let product = req.body;
    if (
      !product.produto_id ||
      !product.nome ||
      !product.descricao ||
      !product.disponibilidade
    ) {
      throw new Error(
        "Produto ID, nome, descricao, disponibilidade, são obrigatórios."
      );
    }
    product = await ProductService.updateProduct(product);
    res.send(product);
  } catch (err) {
    next(err);
  }
};

const updateStatusProduct = async (req, res, next) => {
  try {
    let productStatus = req.body;
    if (!productStatus.produto_id || !productStatus.disponibilidade) {
      throw new Error("Produto ID e disponibilidade são obrigatórios.");
    }
    productStatus = await ProductService.updateStatusProduct(productStatus);
    res.send(productStatus);
  } catch (err) {
    next(err);
  }
};

export default {
  insertProduct,
  showProduct,
  showProducts,
  updateProduct,
  updateStatusProduct,
};
