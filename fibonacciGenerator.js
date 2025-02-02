function fibonacciGenerator(endNum) {
    let a = 0;
    let b = 1;

    console.log(a);  // Отпечатва първото число от Фибоначи

    for (let i = 1; i < endNum; i++) {
        console.log(b);  // Отпечатва текущото число от Фибоначи
        let next = a + b;
        a = b;
        b = next;
    }
}

fibonacciGenerator(10);
