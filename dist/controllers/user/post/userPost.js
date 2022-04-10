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
class UserPostController {
    userPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = new User_1.default(req.body);
                if (user) {
                    yield user.save();
                    return res.status(200).json(user);
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
exports.default = new UserPostController();
