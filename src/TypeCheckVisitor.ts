import { isTypeAliasDeclaration } from "typescript";
import Assignment from "./Assignment";
import ASTVisitor from "./ASTVisitor";
import DeclStmt from "./DeclStmt";
import DuplicateDeclarationError from "./DuplicateDeclarationError";
import InconsistentTypesInPlusError from "./InconsistentTypesInPlusError";
import ITypeCheckError from "./ITypeCheckError";
import NumericLiteral from "./NumericLiteral";
import PlusExpr from "./PlusExpr";
import Sequence from "./Sequence";
import StringLiteral from "./StringLiteral";
import VarExpr from "./VarExpr";

class TypeCheckVisitor implements ASTVisitor {

    private accumlateerror : Array<ITypeCheckError> = new Array<ITypeCheckError>()
    private alreadyseen: Array<string> = new Array<string>()
    


    constructor(){}
    /**
     * the getErrors function that return the list of human-readable error.
     */
    getErrors(): Array<ITypeCheckError> {
        
        return this.accumlateerror;        
    }

   
    //visit the declaration and find the duplicated one.
    visitDeclStmt(d: DeclStmt): void {
     if(this.alreadyseen.indexOf(d.getName()) > -1){
        let newduplicateerror = new DuplicateDeclarationError(d.getName());
        this.accumlateerror.push(newduplicateerror);
     }
        else{
            this.alreadyseen.push(d.getName());
        }
              }
        
       



    //no need
    visitAssignment(d: Assignment): void {
       
    }

    //no need
    visitSequence(d: Sequence): void {
        
    }


    //no need
    visitNumericLiteral(d: NumericLiteral): void {
        
    }



    /**
     * visit plusexpre to put the error type in to the error list
     * if the left type is not equal to the right one
     * @param d the a type of plusexpression
     */
    visitPlusExpr(d: PlusExpr): void {
        var leftType = d.getLeft();
        var rightType = d.getRight();

        
        if(leftType != rightType) {
            var er = new InconsistentTypesInPlusError(d.text())
            this.accumlateerror.push(er);
        }

       
    }

    //no need 
    visitVarExpr(d: VarExpr): void {
        
    }

    //no need
    visitStringLiteral(d: StringLiteral): void {
        
    }

}




export default TypeCheckVisitor