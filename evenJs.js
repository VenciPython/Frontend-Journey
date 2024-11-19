//Another way to ace this task from SoftUni "04. Even Powers of 2"
function evenJs(input) {
    let num = Number(input[0]);
    for (let i = 0; i <= num; i++) {
        if (i % 2 == 0) {
            console.log(Math.pow(2, i));
        }
    }
}
evenJs(["7"])
