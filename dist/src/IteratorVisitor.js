"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Iterator {
    constructor(statementArr) {
        this.statementArr = statementArr;
    }
    hasNext() {
        if (this.statementArr.length > 0) {
            return true;
        }
        else {
            return false;
        }
        ;
    }
    next() {
        if (this.hasNext) {
            return this.statementArr.shift();
        }
        else {
            throw new Error("empty");
        }
    }
}
exports.default = Iterator;
//# sourceMappingURL=IteratorVisitor.js.map