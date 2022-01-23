import ASTVisitor from './ASTVisitor';
import IIterator from './IIterator';
import LiteralExpr from './LiteralExpr'
import Stmt from './Stmt';
import StmtIterator from './StmtItrator';

/**
 * ASTNode representing a string literal 
 */
class StringLiteral implements LiteralExpr {
  constructor(private literal : string){ }

  
  gettype(): string {
    return "StringLiteral";
  }

  stmtIterator(): IIterator<Stmt> {
    return new StmtIterator<Stmt>([]);
  }

  public accept(visitor: ASTVisitor) : void{
    visitor.visitStringLiteral(this);
  }
  
  public text() : string {
    return "\"" + this.literal + "\"";
  }  
}

export default StringLiteral