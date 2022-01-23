import { expect } from 'chai';
import Assignment from '../src/Assignment';
import DeclStmt from '../src/DeclStmt';
import NumericLiteral from '../src/NumericLiteral';
import PlusExpr from '../src/PlusExpr';
import Sequence from '../src/Sequence';
import StringLiteral from '../src/StringLiteral';
import TypeCheckVisitor from '../src/TypeCheckVisitor';
import VarExpr from '../src/VarExpr';




describe("TypeCheckVisitorTests", () => {
    it("type-check a small AST with both kinds of errors", () => {
        let x1 = new DeclStmt("x");
        let x2 = new DeclStmt("x");
        let y = new DeclStmt("y");
        let one = new NumericLiteral(1); 
        let two = new StringLiteral("foo"); 
        let exp1 = new PlusExpr(one, two);
        let exp2 = new NumericLiteral(3); 
        let assign1 = new Assignment("x", exp1);
        let assign2 = new Assignment("y", exp2);
        let code = new Sequence(x1, new Sequence(x2, new Sequence(y, new Sequence(assign1, assign2))))
        let tcVisitor = new TypeCheckVisitor();
        code.accept(tcVisitor);
        let expected = ["Duplicate variable declaration: x",
                       "Type error in expression: 1 + \"foo\""
                    ]; 
        let errors = tcVisitor.getErrors().map((err) => err.toString())
        expect(errors).to.have.same.members(expected);  // both errors
    })


    it("type-check a small AST with both kinds of errors", () => {
        let x1 = new DeclStmt("x");
        let x2 = new DeclStmt("x");
        let x3 = new DeclStmt("y")
        let y = new DeclStmt("y");
        let one = new NumericLiteral(1); 
        let two = new StringLiteral("foo"); 
        let exp1 = new PlusExpr(one, two);
        let exp2 = new NumericLiteral(3); 
        let assign1 = new Assignment("x", exp1);
        let assign2 = new Assignment("y", exp2);
        let code = new Sequence(x1, new Sequence(x2, new Sequence(x3, new Sequence(y,
             new Sequence(assign1, assign2)))))
        let tcVisitor = new TypeCheckVisitor();
        code.accept(tcVisitor);
        let expected = ["Duplicate variable declaration: x",
                        "Duplicate variable declaration: y",
                       "Type error in expression: 1 + \"foo\""
                    ]; 
        let errors = tcVisitor.getErrors().map((err) => err.toString())
        expect(errors).to.have.same.members(expected);  // both errors
    })



    it("type-check a small AST with both kinds of errors", () => {
        let x1 = new DeclStmt("x");
        let x2 = new DeclStmt("y");
        let x3 = new DeclStmt("z")
        let y = new DeclStmt("h");
        let one = new NumericLiteral(1); 
        let two = new StringLiteral("foo"); 
        let exp1 = new PlusExpr(one, two);
        let exp2 = new NumericLiteral(3); 
        let assign1 = new Assignment("x", exp1);
        let assign2 = new Assignment("y", exp2);
        let code = new Sequence(x1, new Sequence(x2, new Sequence(x3, new Sequence(y,
             new Sequence(assign1, assign2)))))
        let tcVisitor = new TypeCheckVisitor();
        code.accept(tcVisitor);
        let expected = [
                       "Type error in expression: 1 + \"foo\""
                    ]; 
        let errors = tcVisitor.getErrors().map((err) => err.toString())
        expect(errors).to.have.same.members(expected);  // both errors
    })



    it("type-check a small AST with both kinds of errors", () => {
        let x1 = new DeclStmt("x");
        let x2 = new DeclStmt("y");
        let x3 = new DeclStmt("z")
        let y = new DeclStmt("h");
        let one = new NumericLiteral(1); 
        let two = new NumericLiteral(2); 
        let exp1 = new PlusExpr(one, two);
        let exp2 = new NumericLiteral(3); 
        let assign1 = new Assignment("x", exp1);
        let assign2 = new Assignment("y", exp2);
        let code = new Sequence(x1, new Sequence(x2, new Sequence(x3, new Sequence(y,
             new Sequence(assign1, assign2)))))
        let tcVisitor = new TypeCheckVisitor();
        code.accept(tcVisitor);
        let expected = new Array; 
        let errors = tcVisitor.getErrors().map((err) => err.toString())
        expect(errors).to.have.same.members(expected);  // both errors
    })


    it("type-check a small AST with both kinds of errors", () => {
        let x1 = new DeclStmt("x");
        let x2 = new DeclStmt("y");
        let x3 = new DeclStmt("z")
        let y = new DeclStmt("h");
        let one = new NumericLiteral(1); 
        let two = new VarExpr("x"); 
        let exp1 = new PlusExpr(one, two);
        let exp2 = new NumericLiteral(3); 
        let assign1 = new Assignment("x", exp1);
        let assign2 = new Assignment("y", exp2);
        let code = new Sequence(x1, new Sequence(x2, new Sequence(x3, new Sequence(y,
             new Sequence(assign1, assign2)))))
        let tcVisitor = new TypeCheckVisitor();
        code.accept(tcVisitor);
        let expected = ["Type error in expression: 1 + x"]; 
        let errors = tcVisitor.getErrors().map((err) => err.toString())
        expect(errors).to.have.same.members(expected);  // both errors
    })




    it("type-check a small AST with both kinds of errors", () => {
        let x1 = new DeclStmt("x");
        let x2 = new DeclStmt("x");
        let x3 = new DeclStmt("x")
        let y = new DeclStmt("x");
        let one = new NumericLiteral(1); 
        let two = new NumericLiteral(2); 
        let exp1 = new PlusExpr(one, two);
        let exp2 = new NumericLiteral(3); 
        let assign1 = new Assignment("x", exp1);
        let assign2 = new Assignment("y", exp2);
        let code = new Sequence(x1, new Sequence(x2, new Sequence(x3, new Sequence(y,
             new Sequence(assign1, assign2)))))

        let tcVisitor = new TypeCheckVisitor();
        code.accept(tcVisitor);
        let expected =["Duplicate variable declaration: x",
        "Duplicate variable declaration: x",
        "Duplicate variable declaration: x"
    ]; 
        let errors = tcVisitor.getErrors().map((err) => err.toString())
        expect(errors).to.have.same.members(expected);  // both errors
    })

    

    it("type-check a small AST with both kinds of errors", () => {
        let x1 = new DeclStmt("x");
        let x2 = new DeclStmt("x");
        let x3 = new DeclStmt("x")
        let y = new DeclStmt("h");
        let one = new NumericLiteral(1); 
        let two = new VarExpr("good"); 
        let exp1 = new PlusExpr(one, two);
        let exp2 = new NumericLiteral(3); 
        let assign1 = new Assignment("x", exp1);
        let assign2 = new Assignment("y", exp2);
        let code = new Sequence(x1, new Sequence(x2, new Sequence(x3, new Sequence(y,
             new Sequence(assign1, assign2)))))
        let tcVisitor = new TypeCheckVisitor();
        code.accept(tcVisitor);
        let expected = ["Type error in expression: 1 + good","Duplicate variable declaration: x",
        "Duplicate variable declaration: x"
    ]; 
        let errors = tcVisitor.getErrors().map((err) => err.toString())
        expect(errors).to.have.same.members(expected);  // both errors
    })
   
        



  
})