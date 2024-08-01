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
exports.AdminService = void 0;
const adminRepository_1 = require("../reposiotry/adminRepository");
const ashs_1 = require("../../helpers/ashs");
class AdminService {
    static createAdmin(name, email, password, phone_number) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //Encripta la contraseña
                password = yield (0, ashs_1.encrypt)(password);
                return yield adminRepository_1.AdminRepository.createAdmin(name, email, password, phone_number);
            }
            catch (error) {
                throw new Error(`Error al crear admin: ${error.message}`);
            }
        });
    }
}
exports.AdminService = AdminService;
