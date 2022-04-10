"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const chatSchema = new mongoose_1.Schema({
    chatId: {
        type: String,
        required: true,
        unique: true,
    },
    users: {
        type: [String],
        required: true,
    },
    messages: {
        user: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
    },
});
exports.default = (0, mongoose_1.model)("chatSchema", chatSchema);
