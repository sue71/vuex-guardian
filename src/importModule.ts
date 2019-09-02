import * as ts from "typescript";
import * as path from 'path';
import { TypeFile, Constants } from "./types";
//_______________________________________________________
//
function importModule(name: string, from: string) {
  return ts.createImportDeclaration(
    undefined,
    undefined,
    ts.createImportClause(
      undefined,
      ts.createNamespaceImport(ts.createIdentifier(name))
    ),
    ts.createStringLiteral(from)
  );
}
//_______________________________________________________
//
export default function(distDir: string, typeFile: TypeFile, constants: Constants) {
  const relativePath = path.relative(distDir, typeFile.filePath);
  return importModule(constants.MODULE, relativePath.slice(0, -3));
}
