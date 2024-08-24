let pagePrice = parseFloat(prompt("Enter the price for printing one page (0.00...1.50):"));
let coverPrice = parseFloat(prompt("Enter the price for printing one cover (0.00...5.00):"));
let discountPercentage = parseInt(prompt("Enter the discount percentage for printing (0...100):"));
let designerFee = parseFloat(prompt("Enter the fee to be paid to the designer (0.00...150.00):"));
let teamPercentage = parseInt(prompt("Enter the percentage of the total amount covered by the team (0...100):"));

const numberOfPages = 899;
const numberOfCovers = 2;

let totalPageCost = pagePrice * numberOfPages;
let totalCoverCost = coverPrice * numberOfCovers;
let totalPrintingCost = totalPageCost + totalCoverCost;
let discountedPrintingCost = totalPrintingCost * (1 - discountPercentage / 100);
let totalCost = discountedPrintingCost + designerFee;
let amountToPay = totalCost * (1 - teamPercentage / 100);

console.log(`Avtonom should pay ${amountToPay.toFixed(2)} BGN.`);