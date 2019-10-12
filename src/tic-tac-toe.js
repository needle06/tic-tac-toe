class TicTacToe {
    constructor() {
        this.currentPlayer = 0;
        this.playerSymbols = ["x","o"];
        this.field = [[null, null, null],[null, null, null],[null, null, null],]
    }

    getCurrentPlayerSymbol() {
        return this.playerSymbols[this.currentPlayer];
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.field[rowIndex][columnIndex] !== null) return;
        this.field[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
        this.currentPlayer = (this.currentPlayer + 1) % 2
    }

    isFinished() {
        return this.getWinner() !==null || this.isDraw();
    }

    getWinner() {
       if (this.checkRow(0) !== null) return this.checkRow(0);
       if (this.checkRow(1) !== null) return this.checkRow(1);
       if (this.checkRow(2) !== null) return this.checkRow(2);
       if (this.checkColumn(0) !== null) return this.checkColumn(0);
       if (this.checkColumn(1) !== null) return this.checkColumn(1);
       if (this.checkColumn(2) !== null) return this.checkColumn(2);
       if (this.checkPrimaryDiag() !== null) return this.checkPrimaryDiag();
       if (this.checkSecondaryDiag() !== null) return this.checkSecondaryDiag();

       return null;
    }

    checkRow(index) {
        if (this.getFieldValue(index, 0) === "x" 
        && this.getFieldValue(index, 1) === "x" 
        && this.getFieldValue(index, 2) === "x") 
        return "x";

        if (this.getFieldValue(index, 0) === "o"
        && this.getFieldValue(index, 1) === "o" 
        && this.getFieldValue(index, 2) === "o") 
        return "o";

        return null;

    }

    checkColumn(index) {
        if (this.getFieldValue(0, index) === "x" 
        && this.getFieldValue(1, index) === "x" 
        && this.getFieldValue(2, index) === "x") 
        return "x";

        if (this.getFieldValue(0, index) === "o"
         && this.getFieldValue(1, index) === "o" 
         && this.getFieldValue(2, index) === "o") 
        return "o";

        return null;
    }

    checkPrimaryDiag() {
        if (this.getFieldValue(0, 0) === "x" 
        && this.getFieldValue(1, 1) === "x" 
        && this.getFieldValue(2, 2) === "x") 
        return "x";

        if (this.getFieldValue(0, 0) === "o"
         && this.getFieldValue(1, 1) === "o" 
         && this.getFieldValue(2, 2) === "o") 
        return "o";

        return null;
    }

    checkSecondaryDiag() {
        if (this.getFieldValue(2, 0) === "x" 
        && this.getFieldValue(1, 1) === "x" 
        && this.getFieldValue(0, 2) === "x") 
        return "x";

        if (this.getFieldValue(2, 0) === "o"
         && this.getFieldValue(1, 1) === "o" 
         && this.getFieldValue(0, 2) === "o") 
        return "o";

        return null;
    }

    noMoreTurns() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if(this.field[i][j] == null) return false;
            }
        }
        return true;
    }

    isDraw() {
        return this.noMoreTurns() && this.getWinner() === null;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex]
    }
}

module.exports = TicTacToe;
