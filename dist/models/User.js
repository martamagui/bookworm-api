"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    //Required
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    birthDate: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    //Profile
    description: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: true,
    },
    reviews: {
        type: [String],
        required: true,
    },
    following: {
        type: [String],
        required: true,
    },
    //Other
    subscribedToNewsLetter: {
        type: Boolean,
        required: true,
    },
    savedReviewsIds: {
        type: [Number],
    },
});
exports.default = (0, mongoose_1.model)("userSchema", userSchema);
