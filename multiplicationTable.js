function multiplicationTable(input) {
    let num = Number(input[0]);

    for (let i = 1; i <= 10; i++) {
        let a = num
        let result = i * num
        console.log(`${i} * ${a} = ${result}`)
    }
}
//multiplicationTable([`5`])
