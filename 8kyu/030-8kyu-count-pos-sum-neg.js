function countPositivesSumNegatives(input) {
    const posCount = input.filter(num => num > 0).length;
    const negSum = input.filter(num => num < 0).reduce((a, b) => a + b)
    return [posCount, negSum];
}
