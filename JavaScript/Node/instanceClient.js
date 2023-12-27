const contA = require("./instanceUnique")
const contB = require("./instanceUnique")

const contC = require("./instanceNew")()
const contD = require("./instanceNew")()

contA.inc()
contA.inc()
console.log(contA.value, contB.value) // 3 3

contC.inc()
contC.inc()
console.log(contC.value, contD.value) // 3 1