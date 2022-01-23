import ASTVisitor from './ASTVisitor';
import IIterator from './IIterator';
import Stmt from './Stmt'
import StmtIterator from './StmtItrator';

/**
 * ASTNode representing a variable declaration  
 */
class DeclStmt implements Stmt {
  constructor(private varName : string){ }
  
  
  
  gettype(): string {
   return "DeclStmt";
  }

  /**
   * 
   */
  stmtIterator(): IIterator<Stmt> {
    return new StmtIterator<Stmt>([this]);
  }

  /**
   * accept the visitor to complete the visit this class. 
   * @param visitor the visitor
   */
  public accept(visitor: ASTVisitor): void {
     visitor.visitDeclStmt(this);
  }
  
  public text() : string {
    return "declare " + this.varName;
  }

  public getName(): string{
    return this.varName;
  }
}

export default DeclStmt


