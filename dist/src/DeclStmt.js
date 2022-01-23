"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StmtItrator_1 = require("./StmtItrator");
/**
 * ASTNode representing a variable declaration
 */
class DeclStmt {
    constructor(varName) {
        this.varName = varName;
    }
    /**
     *
     */
    stmtIterator() {
        return new StmtItrator_1.default([this]);
    }
    /**
     * accept the visitor to complete the visit this class.
     * @param visitor the visitor
     */
    accept(visitor) {
        visitor.visitDeclStmt(this);
    }
    text() {
        return "declare " + this.varName;
    }
    getName() {
        return this.varName;
    }
}
exports.default = DeclStmt;
//# sourceMappingURL=DeclStmt.js.map