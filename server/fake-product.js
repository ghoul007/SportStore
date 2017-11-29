const casual = require('casual')
const Readable = require('readable-stream').Readable
const util = require('util')
const fs = require('fs')



util.inherits(Fake, Readable)

function Fake(n, name) {
    if (!(this instanceof Fake)) return new Fake(n, name)
    this.count = 0
    this.numProducts = n
    this.name = name;
    Readable.call(this)
}

Fake.prototype._read = function _read() {
    if (this.count === 0) this.push('{"' + this.name + '":[')
    if (this.count === this.numProducts) {
        this.push(']}')
        this.push(null)
        return
    }
    this.push(JSON.stringify(casual[this.name]))
    if (this.count < this.numProducts - 1) this.push(',')
    this.count += 1
}


casual.define('product', () => {
    return {
        part_number: casual.integer(1, 9999999),
        name: casual.title,
        category: casual.random_element(['category1', 'category2', 'category3']),
        price: casual.integer(from = 10, to = 1000),
        description: casual.description,
    }
})

const rs = Fake(20, "product") // creates a million products!
const ws = fs.createWriteStream('./product.json')
rs.pipe(ws)