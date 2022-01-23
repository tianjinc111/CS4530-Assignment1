"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DuplicateDeclarationError_1 = require("./DuplicateDeclarationError");
class TypeCheckVisitor {
    constructor() {
        this.accumlateerror = new Array();
        this.alreadyseen = new Array();
    }
    /**
     * the getErrors function that return the list of human-readable error.
     */
    getErrors() {
        return this.accumlateerror;
    }
    //visit the declaration and find the duplicated one.
    visitDeclStmt(d) {
        if (this.alreadyseen.indexOf(d.getName()) > -1) {
            let newduplicateerror = new DuplicateDeclarationError_1.default(d.getName());
            this.accumlateerror.push(newduplicateerror);
        }
        else {
            this.alreadyseen.push(d.getName());
        }
    }
    visitAssignment(d) {
    }
    visitSequence(d) {
    }
    visitNumericLiteral(d) {
    }
    visitPlusExpr(d) {
    }
    visitVarExpr(d) {
    }
    visitStringLiteral(d) {
    }
}
exports.default = TypeCheckVisitor;
//# sourceMappingURL=TypeCheckVisitor.js.map