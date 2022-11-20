import express from "express";
import { addProd, getProds } from "../controllers/prod.js";
const router = express.Router();

//getall
router.get("/", getProds);

//add
router.put("/add/:barcode", addProd);

router.get("/", (req, res) => {
  res.send("this is the auth endpoint");
});

export default router;
