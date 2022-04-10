"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const reviewSchema = new mongoose_1.Schema({
    userId: {
        type: String,
        required: true,
    },
    boookTitle: {
        type: String,
        required: true,
    },
    bookAuthor: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    amazonLink: {
        type: String,
        required: true,
    },
    reviewDescription: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
        default: Date.now,
    },
    likes: {
        type: Number,
        required: true,
    },
    hastags: {
        type: [String],
        required: true,
    },
});
exports.default = (0, mongoose_1.model)("reviewDetail", reviewSchema);
