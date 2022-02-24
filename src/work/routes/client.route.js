import express from "express";
import ClientController from "../controllers/client.controller.js";

const router = express.Router();

router.post("/", ClientController.createClient);
router.get("/", ClientController.showClients);
router.get("/:id", ClientController.showClient);
router.delete("/:id", ClientController.deleteClient);
router.put("/", ClientController.updateClient);

export default router;
