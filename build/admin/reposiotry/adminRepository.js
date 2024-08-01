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
exports.AdminRepository = void 0;
const database_1 = require("../../shared/config/database");
class AdminRepository {
    static createAdmin(name, email, password, phone_number) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const type_custumer = "1";
                const sql = 'INSERT INTO Customer (name, email, password, phone_number,created_by, updated_by,customer_type_id) VALUES (?, ?, ?, ?, ?, ?, ?)';
                const params = [name, email, password, phone_number, name, name, type_custumer];
                const [result] = yield (0, database_1.query)(sql, params);
                // Verifica si el cliente fue creado exitosamente
                if (!result.insertId) {
                    throw new Error('Failed to create Admin, no insertId returned');
                }
                // Obtén el ID del cliente creado
                const createdCustumerId = result.insertId;
                // Construye la entidad Customer completa
                const newCustumer = {
                    id: createdCustumerId,
                    name: name,
                    email: email,
                    password: password,
                    phone_number: phone_number,
                    customer_type_id: type_custumer,
                    created_at: new Date().toISOString(),
                    created_by: name,
                    updated_at: new Date().toISOString(),
                    updated_by: name,
                    deleted: false
                };
                return newCustumer;
            }
            catch (error) {
                throw new Error(`${error.message}`);
            }
        });
    }
}
exports.AdminRepository = AdminRepository;
