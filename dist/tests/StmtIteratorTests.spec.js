"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const Assignment_1 = require("../src/Assignment");
const DeclStmt_1 = require("../src/DeclStmt");
const NumericLiteral_1 = require("../src/NumericLiteral");
const PlusExpr_1 = require("../src/PlusExpr");
const Sequence_1 = require("../src/Sequence");
describe("StmtIteratorTests", () => {
    it("iterator through the statements of a small AST", () => {
        let one = new NumericLiteral_1.default(1);
        let three = new NumericLiteral_1.default(3);
        let exp = new PlusExpr_1.default(one, three);
        let decl = new DeclStmt_1.default("x");
        let assign = new Assignment_1.default("x", exp);
        let seq = new Sequence_1.default(decl, assign);
        let it = seq.stmtIterator();
        chai_1.expect(it.hasNext()).to.equal(true);
        chai_1.expect(it.next().text()).to.equal("declare x");
        chai_1.expect(it.hasNext()).to.equal(true);
        chai_1.expect(it.next().text()).to.equal("x = 1 + 3");
        chai_1.expect(it.hasNext()).to.equal(false);
    });
});
//# sourceMappingURL=StmtIteratorTests.spec.js.map