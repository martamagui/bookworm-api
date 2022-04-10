"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Inner imports
const User_1 = __importDefault(require("../../../models/User"));
class UserGetController {
    //Individual
    byId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield User_1.default.findById(req.params.userId);
                if (user) {
                    return res.status(200).json(user);
                }
                return res.status(404).json("No user was found.");
            }
            catch (error) {
                console.log(error);
                return res.status(400).json("Request error.");
            }
        });
    }
    byEmail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield User_1.default.findOne({ email: req.params.email });
                if (user) {
                    return res.status(200).json(user);
                }
                return res.status(404).json("No users were found.");
            }
            catch (error) {
                console.log(error);
                return res.status(400).json("Request error.");
            }
        });
    }
    //Lists
    unfiltered(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield User_1.default.find();
                if (users) {
                    return res.status(200).json(users);
                }
                return res.status(404).json("No users were found.");
            }
            catch (error) {
                console.log(error);
                return res.status(400).json("Request error.");
            }
        });
    }
    byIdsArray(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield User_1.default.find({
                    userName: { $all: [req.query.userIds] },
                });
                if (users) {
                    return res.status(200).json(users);
                }
                return res.status(404).json("No users were found.");
            }
            catch (error) {
                console.log(error);
                return res.status(400).json("Request error.");
            }
        });
    }
    byName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield User_1.default.find({
                    userName: { $regex: req.params.userName, $options: "i" },
                });
                if (users) {
                    return res.status(200).json(users);
                }
                return res.status(404).json("No users were found.");
            }
            catch (error) {
                console.log(error);
                return res.status(400).json("Request error.");
            }
        });
    }
}
exports.default = new UserGetController();
