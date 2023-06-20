"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseController_1 = __importDefault(require("./BaseController"));
class AdminController extends BaseController_1.default {
    constructor() {
        super();
    }
    getAll(req, res) {
        req.body.message = "Hello Admin";
        res.json(req.body);
    }
}
exports.default = new AdminController();
