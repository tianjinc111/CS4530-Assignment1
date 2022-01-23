import { expect } from 'chai';
import Assignment from '../src/Assignment';
import StringLiteral from '../src/StringLiteral'
import NumericLiteral from '../src/NumericLiteral'
import Sequence from '../src/Sequence';
import PlusExpr from '../src/PlusExpr'
import VarExpr from '../src/VarExpr'
import DeclStmt from '../src/DeclStmt';
import CountVisitor from '../src/CountVisitor';
import ASTVisitor from '../src/ASTVisitor';


describe("CountVisitorTests", () => {
    it("count nodes in a small AST", () => {
        let one = new NumericLiteral(1);
        let three = new NumericLiteral(3); 
        let exp = new PlusExpr(one, three);
        let decl = new DeclStmt("x");
        let assign = new Assignment("x", exp);
        let seq = new Sequence(decl, assign); 
        let countVisitor = new CountVisitor();
        seq.accept(countVisitor);

        expect(countVisitor.getNrAssignment()).to.equal(1);
        expect(countVisitor.getNrDeclStmt()).to.equal(1);
        expect(countVisitor.getNrNumericLiteral()).to.equal(2);
        expect(countVisitor.getNrPlusExpr()).to.equal(1);
        expect(countVisitor.getNrSequence()).to.equal(1);
        expect(countVisitor.getNrStringLiteral()).to.equal(0);
        expect(countVisitor.getNrVarExpr()).to.equal(0);
    })


    it("count nodes in a small AST", () => {
        let one = new NumericLiteral(1);
        let three = new NumericLiteral(3); 
        let four = new NumericLiteral(4)
        let five = new NumericLiteral(5)
        let exp = new PlusExpr(one, three);
        let exp2 = new PlusExpr(four, five)
        let decl = new DeclStmt("x");
        let dec2 = new DeclStmt("y");
        let assign = new Assignment("x", exp);
        let assign2 = new Assignment("y", exp2)
        let seq = new Sequence(decl, new Sequence(dec2, new Sequence(assign,assign2))); 
        let countVisitor = new CountVisitor();
        seq.accept(countVisitor);

        expect(countVisitor.getNrAssignment()).to.equal(2);
        expect(countVisitor.getNrDeclStmt()).to.equal(2);
        expect(countVisitor.getNrNumericLiteral()).to.equal(4);
        expect(countVisitor.getNrPlusExpr()).to.equal(2);
        expect(countVisitor.getNrSequence()).to.equal(3);
        expect(countVisitor.getNrStringLiteral()).to.equal(0);
        expect(countVisitor.getNrVarExpr()).to.equal(0);
    })



    it("count nodes in a small AST", () => {
        let a1 = new DeclStmt("x");
        let a2 = new DeclStmt("y");
        let a3 = new StringLiteral("zip");
        let a4 = new NumericLiteral(8);
        let a5 = new Assignment("x", a3);
        let a6 = new Assignment("y", a4);
        let a7 = new Assignment("y", new VarExpr("x"));
        let seq = new Sequence(a1, new Sequence(a2, new Sequence(a5, new Sequence(a6, a7)))); 
        let countVisitor = new CountVisitor();
        seq.accept(countVisitor);

        expect(countVisitor.getNrAssignment()).to.equal(3);
        expect(countVisitor.getNrDeclStmt()).to.equal(2);
        expect(countVisitor.getNrNumericLiteral()).to.equal(1);
        expect(countVisitor.getNrPlusExpr()).to.equal(0);
        expect(countVisitor.getNrSequence()).to.equal(4);
        expect(countVisitor.getNrStringLiteral()).to.equal(1);
        expect(countVisitor.getNrVarExpr()).to.equal(1);
    })


    it("count nodes in a small AST", () => {
        let a1 = new DeclStmt("x");
        let a2 = new DeclStmt("y");
        let one = new NumericLiteral(1);
        let three = new NumericLiteral(3); 
        let a3 = new StringLiteral("zip");
        let a4 = new NumericLiteral(8);
        let a5 = new Assignment("x", a3);
        let a6 = new Assignment("y", a4);
        let a7 = new Assignment("y", new VarExpr("x"));
        let exp = new PlusExpr(one, three);
        let assign = new Assignment("x", exp);
        let seq = new Sequence(a1, new Sequence(a2, new Sequence(a5, new Sequence(a6, new Sequence(a7,assign))))); 
        let countVisitor = new CountVisitor();
        seq.accept(countVisitor);

        expect(countVisitor.getNrAssignment()).to.equal(4);
        expect(countVisitor.getNrDeclStmt()).to.equal(2);
        expect(countVisitor.getNrNumericLiteral()).to.equal(3);
        expect(countVisitor.getNrPlusExpr()).to.equal(1);
        expect(countVisitor.getNrSequence()).to.equal(5);
        expect(countVisitor.getNrStringLiteral()).to.equal(1);
        expect(countVisitor.getNrVarExpr()).to.equal(1);
    })



    it("count nodes in a small AST", () => {
        let a1 = new DeclStmt("x");
        let a2 = new DeclStmt("y");
        let z = new DeclStmt("z")
        let vavava = new VarExpr("z")
        let one = new NumericLiteral(1);
        let three = new NumericLiteral(3); 
        let a3 = new StringLiteral("zip");
        let a8 = new StringLiteral("good")
        let assign2 = new Assignment("z", a8)
        let a4 = new NumericLiteral(8);
        let a5 = new Assignment("x", a3);
        let a6 = new Assignment("y", a4);
        let a7 = new Assignment("y", new VarExpr("x"));
        let a10 = new Assignment("x",vavava)
        let exp = new PlusExpr(one, three);
        let assign = new Assignment("x", exp);
        let seq = new Sequence(a1, new Sequence(a2, new Sequence(z,
             new Sequence(assign2, new Sequence(a10,new Sequence(a5, new Sequence(a6, new Sequence(a7,assign))))))))
        let countVisitor = new CountVisitor();
        seq.accept(countVisitor);

        expect(countVisitor.getNrAssignment()).to.equal(6);
        expect(countVisitor.getNrDeclStmt()).to.equal(3);
        expect(countVisitor.getNrNumericLiteral()).to.equal(3);
        expect(countVisitor.getNrPlusExpr()).to.equal(1);
        expect(countVisitor.getNrSequence()).to.equal(8);
        expect(countVisitor.getNrStringLiteral()).to.equal(2);
        expect(countVisitor.getNrVarExpr()).to.equal(2);
    })
})