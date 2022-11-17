"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ProductTypesControllers {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const types = yield database_1.default.query('SELECT * FROM tipo_producto');
            res.json(types);
        });
    }
    getProductsOf(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const products = yield database_1.default.query('SELECT * FROM producto WHERE tipo_producto_id_tp = ?', [id]);
            if (products.length > 0) {
                return res.json(products);
            }
            res.status(404).json({ text: "The product doesn't exits" });
        });
    }
}
const productTypesController = new ProductTypesControllers();
exports.default = productTypesController;
