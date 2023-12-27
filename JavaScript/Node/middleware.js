// middleware pattern (chain of responsability)
const pass1 = (context, next) => {
    context.value = "mid1"
    next()
}

const pass2 = (context, next) => {
    context.value = "mid2"
    next()
}

const pass3 = context => context.value = "mid3"

const exec = (context, ...middlewares) => {
    const execPass = index => {
        middlewares && index < middlewares.length && middlewares[index](context, () => execPass(index+1))
    }
    execPass(0)
}

const context = {}
exec(context, pass1, pass2, pass3)
console.log(context)