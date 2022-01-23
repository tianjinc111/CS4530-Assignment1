"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StmtItrator_1 = require("./StmtItrator");
/**
 * ASTNode representing a numeric literal
 */
class NumericLiteral {
    constructor(value) {
        this.value = value;
    }
    stmtIterator() {
        return new StmtItrator_1.default([]);
    }
    accept(visitor) {
        visitor.visitNumericLiteral(this);
    }
    text() {
        return this.value.toString();
    }
}
exports.default = NumericLiteral;
//# sourceMappingURL=NumericLiteral.js.map