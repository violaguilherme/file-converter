class Table {
    constructor(array) {
        this.header = array[0]
        array.shift()  // remove the first elemente of the array
        this.rows = array 
    }

    get RowCount() {
        return this.rows.length
    }

    get ColumnCount() {
        return this.header.length
    }
}

module.exports = Table