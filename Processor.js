class Processor {
    static Process(data) {
        let breakLine = data.split("\r\n")
        let rows = []

        breakLine.forEach(row => {
            let array = row.split(",")
            rows.push(array)
        })
        return rows
    }
}

module.exports = Processor