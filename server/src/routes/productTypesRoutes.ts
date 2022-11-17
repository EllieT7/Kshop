import { Router } from "express";
import productTypesController from "../controllers/productTypesController";

class ProductTypesRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get("/", productTypesController.list);
    this.router.get("/:id", productTypesController.getProductsOf);

  }
}

export default new ProductTypesRoutes().router;