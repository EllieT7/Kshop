"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productTypesController_1 = __importDefault(require("../controllers/productTypesController"));
class ProductTypesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get("/", productTypesController_1.default.list);
        this.router.get("/:id", productTypesController_1.default.getProductsOf);
    }
}
exports.default = new ProductTypesRoutes().router;
