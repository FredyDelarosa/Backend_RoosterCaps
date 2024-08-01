"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.inventaryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const inventaryController_1 = require("../controllers/inventaryController");
exports.inventaryRoutes = express_1.default.Router();
//inventaryRoutes.use(validateToken);
exports.inventaryRoutes.post('/', inventaryController_1.createInventary);
exports.inventaryRoutes.put('/:name', inventaryController_1.updateInventary);
exports.inventaryRoutes.get('/', inventaryController_1.getAllInventaries);
exports.inventaryRoutes.get('/:id_talla/:name', inventaryController_1.getAllInventariesActive);
exports.inventaryRoutes.delete('/:id', inventaryController_1.deleteInventary);
exports.inventaryRoutes.delete('/permanent/:id', inventaryController_1.deleteInventaryPermanent);
exports.inventaryRoutes.get('/caps/:name', inventaryController_1.getAllInventaryCaps);
