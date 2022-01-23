"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StmtIterator {
    constructor(statements) {
        this.statements = statements;
    }
    hasNext() {
        return this.statements.length > 0;
    }
    next() {
        if (this.hasNext()) {
            return this.statements.shift();
        }
        else {
            throw new Error("empty");
        }
    }
    getlist() {
        return this.statements;
    }
}
exports.default = StmtIterator;
//# sourceMappingURL=StmtItrator.js.map