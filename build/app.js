"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const signale_1 = require("signale");
const custumerRoutes_1 = require("./customer/routes/custumerRoutes");
const categorieRoute_1 = require("./categories/routes/categorieRoute");
const capsRoute_1 = require("./caps/routes/capsRoute");
const sizeRoute_1 = require("./sizes/routes/sizeRoute");
const TypeCapRoute_1 = require("./typeCaps/routes/TypeCapRoute");
const inventaryRoute_1 = require("./inventary/routes/inventaryRoute");
const cartRoute_1 = require("./cart/routes/cartRoute");
const sizeRoute_2 = require("./orders/routes/sizeRoute");
const custumerRoutes_2 = require("./admin/routes/custumerRoutes");
const https_1 = __importDefault(require("https"));
const fs_1 = __importDefault(require("fs"));
const app = (0, express_1.default)();
const signale = new signale_1.Signale();
app.use((0, cors_1.default)({ origin: "*" }));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api/v1/custumer', custumerRoutes_1.custumerRoute);
app.use('/api/v1/categorie', categorieRoute_1.categorieRoute);
app.use('/api/v1/cap', capsRoute_1.capRouter);
app.use('/api/v1/size', sizeRoute_1.sizeRoutes);
app.use('/api/v1/typeCap', TypeCapRoute_1.typeCapRoutes);
app.use('/api/v1/inventary', inventaryRoute_1.inventaryRoutes);
app.use('/api/v1/cart', cartRoute_1.cartRoute);
app.use('/api/v1/order', sizeRoute_2.orderRoute);
app.use('/api/v1/admin', custumerRoutes_2.adminRoute);
const port = process.env.PORT || 3001;
const options = {
    key: fs_1.default.readFileSync('/etc/letsencrypt/live/roostercapsapi.integrador.xyz/privkey.pem'),
    cert: fs_1.default.readFileSync('/etc/letsencrypt/live/roostercapsapi.integrador.xyz/fullchain.pem')
};
https_1.default.createServer(options, app).listen(port, () => {
    console.log(`Corriendo en el puerto ${port}`);
});
/*
app.listen(port, () => {
  console.log(`Corriendo en el puerto ${port}`);
});
*/ 
