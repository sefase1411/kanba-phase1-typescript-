"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, dotenv_1.config)();
const PORT = process.env.PORT;
app.get('/sapo', (_, res) => {
    res.send('Hello World');
});
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
