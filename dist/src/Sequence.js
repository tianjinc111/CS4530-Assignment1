"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StmtItrator_1 = require("./StmtItrator");
/**
 * ASTNode representing a sequence of statements.
 */
class Sequence {
    constructor(stat1, stat2) {
        this.stat1 = stat1;
        this.stat2 = stat2;
    }
    stmtIterator() {
        let statement1 = this.stat1.stmtIterator().getlist();
        let statement2 = this.stat2.stmtIterator().getlist();
        let simpleStatement = statement1.concat(statement2);
        return new StmtItrator_1.default(simpleStatement);
    }
    /**
     * accept funciton that pass in the variables to visitor, since sequence has stat1
     * and state2, then recure everytimes when it has a branch
     * @param visitor
     */
    accept(visitor) {
        visitor.visitSequence(this);
        this.stat1.accept(visitor);
        this.stat2.accept(visitor);
    }
    text() {
        return this.stat1.text() + "; " + this.stat2.text();
    }
}
exports.default = Sequence;
//# sourceMappingURL=Sequence.js.map