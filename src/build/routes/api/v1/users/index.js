"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../../../../controllers/UserController"));
const route = (0, express_1.Router)();
route.get('/', UserController_1.default.getAll);
exports.default = route;
