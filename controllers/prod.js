import Prod from "../models/Prod.js";
import mongoose from "mongoose";

export const createProd = async (req, res, next) => {
  const newProd = new Prod(req.body);
  try {
    const savedProd = await newProd.save();
    res.status(200).json(savedProd);
  } catch (err) {
    next(err);
  }
};

export const addProd = async (req, res, next) => {
  try {
    const updatedProd = await Prod.findOneAndUpdate(
      { barcode: String(req.params.barcode) },
      [{ $set: { scanned: { $eq: [false, "$scanned"] } } }],
      { new: true }
    );
    console.log(updatedProd);
    res.status(200).json(updatedProd);
  } catch (err) {
    next(err);
  }
};

export const getProds = async (req, res, next) => {
  const { ...others } = req.query;
  try {
    const prods = await Prod.find({
      ...others,
    }).limit(req.query.limit);
    res.status(200).json(prods);
  } catch (err) {
    next(err);
  }
};
