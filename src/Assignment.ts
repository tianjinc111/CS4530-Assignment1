import Stmt from './Stmt'
import Expr from './Expr'
import ASTVisitor from './ASTVisitor';
import IIterator from './IIterator';
import StmtIterator from './StmtItrator';

/**
 * ASTNode representing an assignment statement  
 */
class Assignment implements Stmt {
  constructor(private varName: string, private exp: Expr){ }
  

  /**
   * iterator function
   */
  stmtIterator(): IIterator<Stmt> {
    return new StmtIterator<Stmt>([this]);
  }


  gettype(): string {
    return "assignment";
  }

  //accept funciton to takin the the visitor so that we could pass in this class as a variable. 
  public accept(visitor: ASTVisitor): void {
     visitor.visitAssignment(this);
     this.exp.accept(visitor);
  }
  
  public text() : string {
    return this.varName + " = " + this.exp.text();
  }



  //name getter
  public getname():string{
    return this.varName;

  }

  //expression getter
  public expgetter(): Expr{
    return this.exp;
  }
}

export default Assignment