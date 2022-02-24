import express from "express";
import ProductController from "../controllers/product.controller.js";

const router = express.Router();

router.post("/", ProductController.insertProduct);
router.get("/", ProductController.showProducts);
router.get("/:id", ProductController.showProduct);
router.put("/", ProductController.updateProduct);
router.put("/status", ProductController.updateStatusProduct);

export default router;
