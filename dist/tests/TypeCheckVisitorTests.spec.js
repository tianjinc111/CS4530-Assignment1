"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const Assignment_1 = require("../src/Assignment");
const DeclStmt_1 = require("../src/DeclStmt");
const NumericLiteral_1 = require("../src/NumericLiteral");
const PlusExpr_1 = require("../src/PlusExpr");
const Sequence_1 = require("../src/Sequence");
const StringLiteral_1 = require("../src/StringLiteral");
const TypeCheckVisitor_1 = require("../src/TypeCheckVisitor");
describe("TypeCheckVisitorTests", () => {
    it("type-check a small AST with both kinds of errors", () => {
        let x1 = new DeclStmt_1.default("x");
        let x2 = new DeclStmt_1.default("x");
        let y = new DeclStmt_1.default("y");
        let one = new NumericLiteral_1.default(1);
        let two = new StringLiteral_1.default("foo");
        let exp1 = new PlusExpr_1.default(one, two);
        let exp2 = new NumericLiteral_1.default(3);
        let assign1 = new Assignment_1.default("x", exp1);
        let assign2 = new Assignment_1.default("y", exp2);
        let code = new Sequence_1.default(x1, new Sequence_1.default(x2, new Sequence_1.default(y, new Sequence_1.default(assign1, assign2))));
        let tcVisitor = new TypeCheckVisitor_1.default();
        code.accept(tcVisitor);
        let expected = ["Duplicate variable declaration: x"
            //   "Type error in expression: 1 + \"foo\"",
        ];
        let errors = tcVisitor.getErrors().map((err) => err.toString());
        chai_1.expect(errors).to.have.same.members(expected); // both errors
    });
});
//# sourceMappingURL=TypeCheckVisitorTests.spec.js.map