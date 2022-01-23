import ASTVisitor from './ASTVisitor';
import IIterator from './IIterator';
import LiteralExpr from './LiteralExpr'
import Stmt from './Stmt';
import StmtIterator from './StmtItrator';

/**
 * ASTNode representing a numeric literal 
 */
class NumericLiteral implements LiteralExpr {
  constructor(private value: number){
  }
  
  gettype(): string {
    return "Numericliteral";
  }
  stmtIterator(): IIterator<Stmt> {
    return new StmtIterator<Stmt>([]);
  }

  public accept(visitor: ASTVisitor): void {
     visitor.visitNumericLiteral(this);
  }
  
  text() : string {
    return this.value.toString();
  }
}

export default NumericLiteral