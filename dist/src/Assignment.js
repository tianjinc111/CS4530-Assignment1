"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StmtItrator_1 = require("./StmtItrator");
/**
 * ASTNode representing an assignment statement
 */
class Assignment {
    constructor(varName, exp) {
        this.varName = varName;
        this.exp = exp;
    }
    stmtIterator() {
        return new StmtItrator_1.default([this]);
    }
    //accept funciton to takin the the visitor so that we could pass in this class as a variable. 
    accept(visitor) {
        visitor.visitAssignment(this);
        this.exp.accept(visitor);
    }
    text() {
        return this.varName + " = " + this.exp.text();
    }
    //name getter
    getname() {
        return this.varName;
    }
    //expression getter
    expgetter() {
        return this.exp;
    }
}
exports.default = Assignment;
//# sourceMappingURL=Assignment.js.map