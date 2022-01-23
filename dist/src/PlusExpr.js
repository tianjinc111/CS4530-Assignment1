"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StmtItrator_1 = require("./StmtItrator");
/**
 * ASTNode representing a binary "+" expression
 */
class PlusExpr {
    constructor(left, right) {
        this.left = left;
        this.right = right;
    }
    /**
     *
     */
    stmtIterator() {
        return new StmtItrator_1.default([]);
    }
    accept(visitor) {
        visitor.visitPlusExpr(this);
        this.left.accept(visitor);
        this.right.accept(visitor);
    }
    text() {
        return this.left.text() + " + " + this.right.text();
    }
}
exports.default = PlusExpr;
//# sourceMappingURL=PlusExpr.js.map