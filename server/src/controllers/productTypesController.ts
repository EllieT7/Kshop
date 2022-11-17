import { Request, Response } from "express";
import pool from "../database";

class ProductTypesControllers {
  public async list(req: Request, res: Response) {
    const types = await pool.query('SELECT * FROM tipo_producto');
    res.json(types);
  }
  public async getProductsOf(req: Request, res: Response) {
    const { id } = req.params;
    const products = await pool.query('SELECT * FROM producto WHERE tipo_producto_id_tp = ?', [id]);
    if (products.length > 0) {
      return res.json(products);
    }
    res.status(404).json({ text: "The product doesn't exits" });
  }
}

const productTypesController = new ProductTypesControllers();
export default productTypesController;