"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StmtItrator_1 = require("./StmtItrator");
/**
 * ASTNode representing a string literal
 */
class StringLiteral {
    constructor(literal) {
        this.literal = literal;
    }
    stmtIterator() {
        return new StmtItrator_1.default([]);
    }
    accept(visitor) {
        visitor.visitStringLiteral(this);
    }
    text() {
        return "\"" + this.literal + "\"";
    }
}
exports.default = StringLiteral;
//# sourceMappingURL=StringLiteral.js.map