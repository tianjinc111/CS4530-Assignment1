import { expect } from 'chai';
import Assignment from '../src/Assignment';
import DeclStmt from '../src/DeclStmt';
import NumericLiteral from '../src/NumericLiteral';
import PlusExpr from '../src/PlusExpr';
import Sequence from '../src/Sequence';
import StringLiteral from '../src/StringLiteral';


describe("StmtIteratorTests", () => {
    it("iterator through the statements of a small AST", () => {
        let one = new NumericLiteral(1);
        let three = new NumericLiteral(3); 
        let exp = new PlusExpr(one, three);
        let decl = new DeclStmt("x");
        let assign = new Assignment("x", exp);
        let seq = new Sequence(decl, assign); 
        
        let it = seq.stmtIterator();
        
        expect(it.hasNext()).to.equal(true);
        expect(it.next().text()).to.equal("declare x");
        expect(it.hasNext()).to.equal(true);
        expect(it.next().text()).to.equal("x = 1 + 3");
        expect(it.hasNext()).to.equal(false);
})



it("iterator through the statements of a small AST", () => {
    let one = new NumericLiteral(1);
    let three = new NumericLiteral(10); 
    let exp = new PlusExpr(one, three);
    let it = exp.stmtIterator();
    expect(it.hasNext()).to.equal(false)
   
})





it("iterator through the statements of a small AST", () => {
        let a1 = new Assignment("x", new StringLiteral("foo"));
        let a2 = new Assignment("y", new NumericLiteral(7));
        let seq = new Sequence(a1, a2);
        
    
    let it = seq.stmtIterator();
    
    expect(it.hasNext()).to.equal(true);
    expect(it.next().text()).to.equal('x = "foo"');
    expect(it.hasNext()).to.equal(true);
    expect(it.next().text()).to.equal("y = 7");
    expect(it.hasNext()).to.equal(false);
})




})