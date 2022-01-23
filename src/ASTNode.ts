import ASTVisitor from "./ASTVisitor";
import IIterator from "./IIterator";
import Stmt from "./Stmt";

/**
 * Root of the AST Node hierarchy.  
 */
interface ASTNode {
  /**
   * create textual representation of the AST node
   */
  text() : string

  /**
   * accept the visitor so we could extract the logic 
   * @param visitor visitor where is operation logic is
   */
  accept(visitor: ASTVisitor): void


  /**
   * returns an iterator fo that astnode and its children
   */
  stmtIterator() : IIterator<Stmt>


  gettype(): string
}

export default ASTNode