"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRoute = void 0;
const express_1 = __importDefault(require("express"));
const adminControllers_1 = require("../controller/adminControllers");
exports.adminRoute = express_1.default.Router();
exports.adminRoute.post('/', adminControllers_1.createAdmin);
