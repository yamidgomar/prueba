const readline = require('readline')

const r1 = readline.createInterface({
    input:process.stdin,
    output: process.stdout
});

r1.question('deseas añafir datos ', (answer) => {
    console.log(`Maybe it'd ${answer}, maybr it's because they are awesome! :)`)
    r1.close()
})
