"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = require("express");
//Inner imports
const userGet_1 = __importDefault(require("./../controllers/user/get/userGet"));
const userPost_1 = __importDefault(require("./../controllers/user/post/userPost"));
const userDelete_1 = __importDefault(require("../controllers/user/delete/userDelete"));
const userPut_1 = __importDefault(require("../controllers/user/put/userPut"));
class UserRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        //----------------- GET
        this.router.get("/user/:userId", (req, res) => {
            userGet_1.default.byId(req, res);
        });
        this.router.get("/user/email/:email", (req, res) => {
            userGet_1.default.byEmail(req, res);
        });
        //List
        this.router.get("/user/list", (req, res) => {
            userGet_1.default.unfiltered(req, res);
        });
        this.router.get("/user/list-ids", (req, res) => {
            userGet_1.default.byIdsArray(req, res);
        });
        this.router.get("/user/list-names/:userName", (req, res) => {
            userGet_1.default.byName(req, res);
        });
        //----------------- POST
        this.router.post("/user", (req, res) => {
            userPost_1.default.userPost(req, res);
        });
        //----------------- DELETE
        this.router.delete("/user", (req, res) => {
            userDelete_1.default.delete(req, res);
        });
        //----------------- PUT
        this.router.put("/user/update-password", (req, res) => {
            userPut_1.default.modifyPassword(req, res);
        });
        this.router.put("/user/update-email", (req, res) => {
            userPut_1.default.modifyEmail(req, res);
        });
        this.router.put("/user/update-description", (req, res) => {
            userPut_1.default.modifyProfileDescription(req, res);
        });
        this.router.put("/user/update-avatar", (req, res) => {
            userPut_1.default.modifyAvatar(req, res);
        });
        this.router.put("/user/update-userName", (req, res) => {
            userPut_1.default.modifyUserName(req, res);
        });
        this.router.put("/user/update-following", (req, res) => {
            userPut_1.default.modifyFollowing(req, res);
        });
        this.router.put("/user/update-newsletter", (req, res) => {
            userPut_1.default.subscribeUnsubscribeToNewsLetter(req, res);
        });
        this.router.put("/user/update-savedReviews", (req, res) => {
            userPut_1.default.modifySavedReviews(req, res);
        });
    }
}
exports.UserRoutes = UserRoutes;
