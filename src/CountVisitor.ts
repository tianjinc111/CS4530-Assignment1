import Assignment from "./Assignment";
import ASTVisitor from "./ASTVisitor";
import DeclStmt from "./DeclStmt";
import NumericLiteral from "./NumericLiteral";
import PlusExpr from "./PlusExpr";
import Sequence from "./Sequence";
import StringLiteral from "./StringLiteral";
import VarExpr from "./VarExpr";




/**
 * count visitor class to track through every expression and statement in the sequence
 * with logical operation by using visitor design pattern. 
 */
class CountVisitor implements ASTVisitor{
   
   //variables to count how many  occurrences of each types 
   //expression count
    private nofVarExpr = 0;
    private nofNumericliteral = 0;
    private nofStringliteral = 0;
    private nofPlusExpr =0;
    //statement counts
    private nofAssignment = 0;
    private nofDeclare = 0;
    private nofSequence = 0;

    //constructor default
    constructor(){}
   
     //visit function

     /**
      * visit the plusexpression
      * everytime there is an plus expression , add one. 
      * @param d plusexpression 
      */
    public visitPlusExpr(d: PlusExpr): void {
        this.nofPlusExpr += 1;
    }

    /**
     * everytime there is an sequence visited, add one
     * @param d sequence
     */
    public visitSequence(d: Sequence): void {
        this.nofSequence += 1;
    }


    /**
     * everytime there is a varexpression visited, add one
     * @param d var expression 
     */
    public visitVarExpr(d: VarExpr): void {
        this.nofVarExpr +=1;
    
    }

    /**
     * everytime there is an stringliteral visited, add one
     * @param d stringliteral 
     */
    public visitStringLiteral(d: StringLiteral): void {
        this.nofStringliteral += 1;
    }

    /**
     * everytime there is an numericliteral visited, add one
     * @param d numericliteral 
     */
    public visitNumericLiteral(d: NumericLiteral): void {
        this.nofNumericliteral += 1;
    }
   
    /**
     * everytime there is a declaration statement visited, add one
     * @param d declaration statement 
     */
    public visitDeclStmt(d: DeclStmt): void {
        this.nofDeclare += 1;

    }

    /**
     * addone for each visited assignment 
     * @param d assignment 
     */
    public visitAssignment(d: Assignment): void {
        this.nofAssignment += 1;
    }




    //count function to return each fields. 
    public getNrStringLiteral(): number {
        return this.nofStringliteral;
    }
    public getNrVarExpr(): number {
       return this.nofVarExpr;
    }
    public getNrSequence(): number {
        return this.nofSequence;
    }
   public  getNrPlusExpr(): number {
        return this.nofPlusExpr;
    }
    public getNrNumericLiteral(): number {
       return this.nofNumericliteral;
    }
   public getNrDeclStmt(): number {
        return this.nofDeclare;
    }
   public  getNrAssignment(): any {
        return this.nofAssignment;
    }

    
}


export default CountVisitor