import DeclStmt from "./DeclStmt";
import ITypeCheckError from "./ITypeCheckError";


/**
 * defining the situations where  AST contains multiple DeclStmts 
 * that refer to the same variable. and return as an error.
 */
class DuplicateDeclarationError implements ITypeCheckError{
    private err: string

    //constructor
    constructor(err: string) {
        this.err = err;
    }
    
    /**
     * to produces a human-readable representation of the error message.
     */
    public toString(): string{
        return "Duplicate variable declaration: " + this.err;
    }
}


export default DuplicateDeclarationError

