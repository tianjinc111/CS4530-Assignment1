"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const Assignment_1 = require("../src/Assignment");
const StringLiteral_1 = require("../src/StringLiteral");
const NumericLiteral_1 = require("../src/NumericLiteral");
const Sequence_1 = require("../src/Sequence");
const PlusExpr_1 = require("../src/PlusExpr");
const VarExpr_1 = require("../src/VarExpr");
const DeclStmt_1 = require("../src/DeclStmt");
describe("test the text() methods on AST nodes", () => {
    it("calling text() on assignment", () => {
        let a = new Assignment_1.default("x", new StringLiteral_1.default("foo"));
        chai_1.expect(a.text()).to.equal("x = \"foo\"");
    });
    it("calling text() on nested assignment", () => {
        let a1 = new Assignment_1.default("y", new StringLiteral_1.default("foo"));
        let a2 = new Assignment_1.default("x", a1);
        chai_1.expect(a2.text()).to.equal("x = y = \"foo\"");
    });
    it("calling text() on sequence of assignments", () => {
        let a1 = new Assignment_1.default("x", new StringLiteral_1.default("foo"));
        let a2 = new Assignment_1.default("y", new NumericLiteral_1.default(7));
        let seq = new Sequence_1.default(a1, a2);
        chai_1.expect(seq.text()).to.equal("x = \"foo\"; y = 7");
    });
    it("calling text() on + expression with two numeric args", () => {
        let a1 = new NumericLiteral_1.default(7);
        let a2 = new NumericLiteral_1.default(8);
        let plus = new PlusExpr_1.default(a1, a2);
        chai_1.expect(plus.text()).to.equal("7 + 8");
    });
    it("calling text() on + expression with two string args", () => {
        let a1 = new StringLiteral_1.default("zip");
        let a2 = new StringLiteral_1.default("zap");
        let plus = new PlusExpr_1.default(a1, a2);
        chai_1.expect(plus.text()).to.equal("\"zip\" + \"zap\"");
    });
    it("calling text() on + expression with two mixed args", () => {
        let a1 = new StringLiteral_1.default("zip");
        let a2 = new NumericLiteral_1.default(8);
        let plus = new PlusExpr_1.default(a1, a2);
        chai_1.expect(plus.text()).to.equal("\"zip\" + 8");
    });
    it("calling text() on a statement sequence", () => {
        let a1 = new DeclStmt_1.default("x");
        let a2 = new DeclStmt_1.default("y");
        let a3 = new NumericLiteral_1.default(7);
        let a4 = new NumericLiteral_1.default(8);
        let a5 = new Assignment_1.default("x", a3);
        let a6 = new Assignment_1.default("y", a4);
        let a7 = new Assignment_1.default("y", new VarExpr_1.default("x"));
        let seq = new Sequence_1.default(a1, new Sequence_1.default(a2, new Sequence_1.default(a5, new Sequence_1.default(a6, a7))));
        chai_1.expect(seq.text()).to.equal("declare x; declare y; x = 7; y = 8; y = x");
    });
    it("calling text() on another statement sequence", () => {
        let a1 = new DeclStmt_1.default("x");
        let a2 = new DeclStmt_1.default("y");
        let a3 = new StringLiteral_1.default("zip");
        let a4 = new NumericLiteral_1.default(8);
        let a5 = new Assignment_1.default("x", a3);
        let a6 = new Assignment_1.default("y", a4);
        let a7 = new Assignment_1.default("y", new VarExpr_1.default("x"));
        let seq = new Sequence_1.default(a1, new Sequence_1.default(a2, new Sequence_1.default(a5, new Sequence_1.default(a6, a7))));
        chai_1.expect(seq.text()).to.equal("declare x; declare y; x = \"zip\"; y = 8; y = x");
    });
});
//# sourceMappingURL=ASTTests.spec.js.map