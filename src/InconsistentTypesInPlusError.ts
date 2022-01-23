import ITypeCheckError from "./ITypeCheckError";




/**
 * defining the inconsistent type in plus error 
 */
class InconsistentTypesInPlusError implements ITypeCheckError{
    private exprError: string

    /**
     * constructor that take in a expr
     * @param exprError expression error
     */
    constructor(exprError: string) {
        this.exprError = exprError;
    }
    
    public toString(): string{
        return "Type error in expression: " + this.exprError;
    }
}



export default InconsistentTypesInPlusError