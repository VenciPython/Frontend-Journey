function histogram(input) {

    let n = Number(input[0]);

    let p1 = 0; let p2 = 0;
    let p3 = 0; let p4 = 0;
    let p5 = 0;

    for (let i = 1; i < input.length; i++) {
        let num = input[i];
        if (num < 200) {
            p1 += 1;

        } else if (200 <= num && num <= 399) {
            p2 += 1;

        } else if (400 <= num && num <= 599) {
            p3 += 1;

        } else if (600 <= num && num <= 799) {
            p4 += 1;

        } else {
            p5 += 1;
        }
    }

    let percentageP1 = p1 / n * 100;
    let percentageP2 = p2 / n * 100;
    let percentageP3 = p3 / n * 100;
    let percentageP4 = p4 / n * 100;
    let percentageP5 = p5 / n * 100;

    console.log(`${percentageP1.toFixed(2)}%`);
    console.log(`${percentageP2.toFixed(2)}%`);
    console.log(`${percentageP3.toFixed(2)}%`);
    console.log(`${percentageP4.toFixed(2)}%`);
    console.log(`${percentageP5.toFixed(2)}%`);
}

//histogram(["14","53","7","56","180","450","920","12","7","150","250","680","2","600","200"])
