"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StmtItrator_1 = require("./StmtItrator");
/**
 * ASTNode representing a variable
 */
class VarExpr {
    constructor(varName) {
        this.varName = varName;
    }
    stmtIterator() {
        return new StmtItrator_1.default([]);
    }
    accept(visitor) {
        visitor.visitVarExpr(this);
    }
    text() {
        return this.varName;
    }
}
exports.default = VarExpr;
//# sourceMappingURL=VarExpr.js.map