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
class UserPutController {
    modifyPassword(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield User_1.default.findOneAndUpdate({ _id: req.params.userId }, {
                    password: req.body.password,
                });
                if (user) {
                    return res.status(200).json("ok");
                }
                return res.status(400).json("Malformed body.");
            }
            catch (error) {
                console.log(error);
                return res.status(400).json("Malformed body.");
            }
        });
    }
    modifyEmail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield User_1.default.findOneAndUpdate({ _id: req.params.userId }, {
                    email: req.body.email,
                });
                if (user) {
                    return res.status(200).json("ok");
                }
                return res.status(400).json("Malformed body.");
            }
            catch (error) {
                console.log(error);
                return res.status(400).json("Malformed body.");
            }
        });
    }
    modifyProfileDescription(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield User_1.default.findOneAndUpdate({ _id: req.params.userId }, {
                    email: req.body.email,
                });
                if (user) {
                    return res.status(200).json("ok");
                }
                return res.status(400).json("Malformed body.");
            }
            catch (error) {
                console.log(error);
                return res.status(400).json("Malformed body.");
            }
        });
    }
    modifyAvatar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield User_1.default.findOneAndUpdate({ _id: req.params.userId }, {
                    email: req.body.avatar,
                });
                if (user) {
                    return res.status(200).json("ok");
                }
                return res.status(400).json("Malformed body.");
            }
            catch (error) {
                console.log(error);
                return res.status(400).json("Malformed body.");
            }
        });
    }
    modifyUserName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield User_1.default.findOneAndUpdate({ _id: req.params.userId }, {
                    email: req.body.userName,
                });
                if (user) {
                    return res.status(200).json("ok");
                }
                return res.status(400).json("Malformed body.");
            }
            catch (error) {
                console.log(error);
                return res.status(400).json("Malformed body.");
            }
        });
    }
    modifyFollowing(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield User_1.default.findOneAndUpdate({ _id: req.params.userId }, {
                    email: req.body.following,
                });
                if (user) {
                    return res.status(200).json("ok");
                }
                return res.status(400).json("Malformed body.");
            }
            catch (error) {
                console.log(error);
                return res.status(400).json("Malformed body.");
            }
        });
    }
    subscribeUnsubscribeToNewsLetter(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield User_1.default.findOneAndUpdate({ _id: req.params.userId }, {
                    email: req.body.subscribedToNewsLetter,
                });
                if (user) {
                    return res.status(200).json("ok");
                }
                return res.status(400).json("Malformed body.");
            }
            catch (error) {
                console.log(error);
                return res.status(400).json("Malformed body.");
            }
        });
    }
    modifySavedReviews(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield User_1.default.findOneAndUpdate({ _id: req.params.userId }, {
                    email: req.body.savedReviewsIds,
                });
                if (user) {
                    return res.status(200).json("ok");
                }
                return res.status(400).json("Malformed body.");
            }
            catch (error) {
                console.log(error);
                return res.status(400).json("Malformed body.");
            }
        });
    }
}
exports.default = new UserPutController();
