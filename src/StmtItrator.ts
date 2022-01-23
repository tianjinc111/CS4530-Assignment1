import IIterator from "./IIterator";



/**
 * iterorot class to go throught the ATSnode statemn
 */
export default class StmtIterator<Stmt> implements IIterator<Stmt>{
        private statements: Stmt[]

        
        constructor(statements: Stmt[]){
            this.statements = statements
        }


     /**
     * check if the iterator have the next one
     */
    hasNext(): boolean {
        return this.statements.length >0
    }


    /**
     * get to the next item of the itorator
     */
    next(): Stmt {
       if(this.hasNext()){
           return this.statements.shift();
       }
       else{
           throw new Error("empty");
           
       }
    }


    // to return the list of statement 
    getlist(): Stmt[] {
       return this.statements
    }

}