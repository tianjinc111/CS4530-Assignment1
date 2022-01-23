import Assignment from "./Assignment";
import DeclStmt from "./DeclStmt";
import LiteralExpr from "./LiteralExpr";
import NumericLiteral from "./NumericLiteral";
import PlusExpr from "./PlusExpr";
import Sequence from "./Sequence";
import StringLiteral from "./StringLiteral";
import VarExpr from "./VarExpr";

/**
 * Root of the AST Node hierarchy.  
 */
interface ASTVisitor {
  //visitor of statement
    visitDeclStmt(d: DeclStmt): void
    visitAssignment(d: Assignment): void
    visitSequence(d: Sequence): void

    // visitor of expression
    visitNumericLiteral(d: NumericLiteral): void
    visitPlusExpr(d: PlusExpr): void
    visitVarExpr(d: VarExpr): void
    visitStringLiteral(d: StringLiteral): void

   
   

  }
  
  export default ASTVisitor