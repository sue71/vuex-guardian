"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ts = __importStar(require("typescript"));
var argument2_1 = __importDefault(require("./argument2"));
var strictCommit_1 = __importDefault(require("./strictCommit"));
var strictDispatch_1 = __importDefault(require("./strictDispatch"));
var strictContext_1 = __importDefault(require("./strictContext"));
var strictStore_1 = __importDefault(require("./strictStore"));
var rootState_1 = __importDefault(require("./rootState"));
var rootContext_1 = __importDefault(require("./rootContext"));
//_______________________________________________________
//
exports.default = (function (printer, emptyFile, fileTree, constants) {
    return printer.printList(ts.ListFormat.MultiLine, ts.createNodeArray([
        ts.createImportDeclaration(undefined, undefined, undefined, ts.createStringLiteral(constants.VUEX)),
        ts.createModuleDeclaration(undefined, [ts.createModifier(ts.SyntaxKind.DeclareKeyword)], ts.createStringLiteral(constants.VUEX), ts.createModuleBlock(__spreadArrays(argument2_1.default(constants), strictCommit_1.default(constants), strictDispatch_1.default(constants), strictContext_1.default(constants), strictStore_1.default(constants), rootState_1.default(fileTree, constants), rootContext_1.default(constants))))
    ]), emptyFile);
});
