"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CountVisitor {
    //constructor default
    constructor() {
        //variables to count how many  occurrences of each types 
        //expression count
        this.nofVarExpr = 0;
        this.nofNumericliteral = 0;
        this.nofStringliteral = 0;
        this.nofPlusExpr = 0;
        //statement counts
        this.nofAssignment = 0;
        this.nofDeclare = 0;
        this.nofSequence = 0;
    }
    //visit function
    /**
     *
     * @param d
     */
    visitPlusExpr(d) {
        this.nofPlusExpr += 1;
    }
    /**
     *
     * @param d
     */
    visitSequence(d) {
        this.nofSequence += 1;
    }
    /**
     *
     * @param d
     */
    visitVarExpr(d) {
        this.nofVarExpr += 1;
    }
    /**
     *
     * @param d
     */
    visitStringLiteral(d) {
        this.nofStringliteral += 1;
    }
    /**
     *
     * @param d
     */
    visitNumericLiteral(d) {
        this.nofNumericliteral += 1;
    }
    /**
     *
     * @param d
     */
    visitDeclStmt(d) {
        this.nofDeclare += 1;
    }
    /**
     *
     * @param d
     */
    visitAssignment(d) {
        this.nofAssignment += 1;
    }
    //count function
    getNrStringLiteral() {
        return this.nofStringliteral;
    }
    getNrVarExpr() {
        return this.nofVarExpr;
    }
    getNrSequence() {
        return this.nofSequence;
    }
    getNrPlusExpr() {
        return this.nofPlusExpr;
    }
    getNrNumericLiteral() {
        return this.nofNumericliteral;
    }
    getNrDeclStmt() {
        return this.nofDeclare;
    }
    getNrAssignment() {
        return this.nofAssignment;
    }
}
exports.default = CountVisitor;
//# sourceMappingURL=CountVisitor.js.map