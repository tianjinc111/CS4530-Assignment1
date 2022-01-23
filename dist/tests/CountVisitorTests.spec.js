"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const Assignment_1 = require("../src/Assignment");
const NumericLiteral_1 = require("../src/NumericLiteral");
const Sequence_1 = require("../src/Sequence");
const PlusExpr_1 = require("../src/PlusExpr");
const DeclStmt_1 = require("../src/DeclStmt");
const CountVisitor_1 = require("../src/CountVisitor");
describe("CountVisitorTests", () => {
    it("count nodes in a small AST", () => {
        let one = new NumericLiteral_1.default(1);
        let three = new NumericLiteral_1.default(3);
        let exp = new PlusExpr_1.default(one, three);
        let decl = new DeclStmt_1.default("x");
        let assign = new Assignment_1.default("x", exp);
        let seq = new Sequence_1.default(decl, assign);
        let countVisitor = new CountVisitor_1.default();
        seq.accept(countVisitor);
        chai_1.expect(countVisitor.getNrAssignment()).to.equal(1);
        chai_1.expect(countVisitor.getNrDeclStmt()).to.equal(1);
        chai_1.expect(countVisitor.getNrNumericLiteral()).to.equal(2);
        chai_1.expect(countVisitor.getNrPlusExpr()).to.equal(1);
        chai_1.expect(countVisitor.getNrSequence()).to.equal(1);
        chai_1.expect(countVisitor.getNrStringLiteral()).to.equal(0);
        chai_1.expect(countVisitor.getNrVarExpr()).to.equal(0);
    });
});
//# sourceMappingURL=CountVisitorTests.spec.js.map