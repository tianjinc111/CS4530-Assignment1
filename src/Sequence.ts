import ASTVisitor from './ASTVisitor';
import IIterator from './IIterator';
import Stmt from './Stmt'
import StmtIterator from './StmtItrator';

/**
 * ASTNode representing a sequence of statements.
 */
class Sequence implements Stmt {
  
  
  constructor(private stat1: Stmt, private stat2: Stmt){ }

  /**
   * get the type of the sequence
   */
  gettype(): string {
   return "sequence";
  }

  /**
   * iteroator with recurr since sequence has stat1 and stat2
   */
  stmtIterator(): IIterator<Stmt> {
    let statement1 = this.stat1.stmtIterator().getlist();
    let statement2 = this.stat2.stmtIterator().getlist();
    let simpleStatement = statement1.concat(statement2)
    return new StmtIterator<Stmt>(simpleStatement)
  }



  /**
   * accept funciton that pass in the variables to visitor, since sequence has stat1
   * and state2, then recure everytimes when it has a branch
   * @param visitor 
   */
  public accept(visitor: ASTVisitor): void {
     visitor.visitSequence(this);
     this.stat1.accept(visitor);
     this.stat2.accept(visitor);
  }
  
  public text() : string {
    return this.stat1.text() + "; " + this.stat2.text();
  }
}

export default Sequence