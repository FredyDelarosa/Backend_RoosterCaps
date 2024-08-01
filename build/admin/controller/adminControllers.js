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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAdmin = void 0;
const adminService_1 = require("../services/adminService");
const createAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password, phone_number } = req.body;
        //Validaciones aun que no es correcto hacerlo de esta forma
        if (!name || !email || !password || !phone_number) {
            return res.status(400).json({ message: 'Missing required fields' });
        }
        const newAdmin = yield adminService_1.AdminService.createAdmin(name, email, password, phone_number);
        res.status(201).json(newAdmin);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.createAdmin = createAdmin;
