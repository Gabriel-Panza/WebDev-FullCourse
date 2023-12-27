const annonymous = process.argv.indexOf("-a") !== -1
// console.log(annonymous)

if (annonymous) {
    process.stdout.write("Hey annonymous\n")
    process.exit()
} else {
    process.stdout.write("Inform your name: ")
    process.stdin.on("data", data => {
        const name = data.toString().replace('\n','')

        process.stdout.write(`Hey ${name}\n`)
        process.exit()
    })
}