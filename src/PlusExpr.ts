import ASTVisitor from './ASTVisitor';
import Expr from './Expr'
import IIterator from './IIterator';
import Stmt from './Stmt';
import StmtIterator from './StmtItrator';

/**
 * ASTNode representing a binary "+" expression 
 */
class PlusExpr implements Expr {
    
  constructor(private left: Expr, private right: Expr){ }
  gettype(): string {
    return "PlusExpr";
  }

  /**
   * 
   */
  stmtIterator(): IIterator<Stmt> {
    return new StmtIterator<Stmt>([]);
  }




 public accept(visitor: ASTVisitor): void {
     visitor.visitPlusExpr(this);
     this.left.accept(visitor);
     this.right.accept(visitor);
  }

  public text() : string {
       return this.left.text() + " + " + this.right.text(); 
  }

  public getLeft() {
    return this.left.gettype();
}

public getRight() {
  return this.right.gettype();
}
  
}

export default PlusExpr