"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = __importDefault(require("../routes/api/v1/users"));
const admins_1 = __importDefault(require("./api/v1/admins"));
const route = (0, express_1.Router)();
route.use("/users", users_1.default);
route.use("/admins", admins_1.default);
exports.default = route;
