function fishland(input) {
    let skumPriceKilo = Number(input[0]);
    let tsatsaPriceKilo = Number(input[1]);
    let palamoudBuyKg = Number(input[2]);
    let safridBuyKg = Number(input[3]);
    let midiBuyKg = Number(input[4]);

    let palamoudPriceKilo = (skumPriceKilo * 0.60) + skumPriceKilo;
    let safridPriceKilo = (tsatsaPriceKilo * 0.80) + tsatsaPriceKilo;
    let midiPriceKilo = 7.50;

    let palamoudAllSum = palamoudBuyKg * palamoudPriceKilo;
    let safridAllSum = safridBuyKg * safridPriceKilo;
    let midiAllSum = midiPriceKilo * midiBuyKg;

    let allSum = palamoudAllSum + safridAllSum + midiAllSum;
    console.log(allSum.toFixed(2))
}
//fishland(['6.90', '4.20', '1.5', '2.5', '1'])
