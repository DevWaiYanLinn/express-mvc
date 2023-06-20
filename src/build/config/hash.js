"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    driver: process.env.HASH_DRIVER || 'bcrypt',
    bcrypt: {
        salt: process.env.SALT || 10,
    }
};
