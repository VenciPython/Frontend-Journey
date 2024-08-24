function calculateProcessors(input) {
    let plannedProcessors = Number(input[0]);
    let workers = Number(input[1]);
    let workingDays = Number(input[2]);

    let hoursAvailable = workers * workingDays * 8;
    let processorsProduced = Math.floor(hoursAvailable / 3);
    let processorPrice = 110.10;

    if (processorsProduced >= plannedProcessors) {
        let profit = (processorsProduced - plannedProcessors) * processorPrice;
        console.log(`Profit: -> ${profit.toFixed(2)} BGN`);
    } else {
        let loss = (plannedProcessors - processorsProduced) * processorPrice;
        console.log(`Losses: -> ${loss.toFixed(2)} BGN`);
    }
}