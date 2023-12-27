const fs = require("fs")

const path = __dirname + "/archive.json"

//Sync...
const content = fs.readFileSync(path, "utf-8")
console.log(content)

//Assync...
fs.readFile(path, "utf-8", (err,contentAssync) => {
    const config = JSON.parse(contentAssync)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require("./archive.json")
console.log(config.db)

fs.readdir(__dirname, (err,contentDir) => {
    console.log("Directory content...")
    console.log(contentDir)
})

const produto = {
    name:"Cellphone",
    price: 1249.00,
    discount: 0.15
}

fs.writeFile(__dirname + "/archiveCreated.json", JSON.stringify(produto), err => {
    console.log(err || "Archive saved!")
})