import ASTVisitor from './ASTVisitor';
import CountVisitor from './CountVisitor';
import Expr from './Expr'
import IIterator from './IIterator';
import Stmt from './Stmt';
import StmtIterator from './StmtItrator';

/**
 * ASTNode representing a variable 
 */
class VarExpr implements Expr {
  constructor(private varName: string){ }
  gettype(): string {
   return "VarExpr";
  }
  stmtIterator(): IIterator<Stmt> {
    return new StmtIterator<Stmt>([]);
  }

  /**
   * accept the visitor then take in teh var expression into it. 
   * @param visitor astvisitor
   */
  accept(visitor: ASTVisitor): void {
     visitor.visitVarExpr(this);
  }
  
  public text() : string {
       return this.varName; 
  } 
}

export default VarExpr