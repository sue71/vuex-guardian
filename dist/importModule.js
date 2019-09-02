"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ts = __importStar(require("typescript"));
var path = __importStar(require("path"));
//_______________________________________________________
//
function importModule(name, from) {
    return ts.createImportDeclaration(undefined, undefined, ts.createImportClause(undefined, ts.createNamespaceImport(ts.createIdentifier(name))), ts.createStringLiteral(from));
}
//_______________________________________________________
//
function default_1(distDir, typeFile, constants) {
    var relativePath = path.relative(distDir, typeFile.filePath);
    return importModule(constants.MODULE, relativePath.slice(0, -3));
}
exports.default = default_1;
