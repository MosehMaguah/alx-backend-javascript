function calculateNumber (a, b) {
    const ar = math.round(a);
    const br = math.round(b);
    const sum = ar + br;

    return sum;
}

module.exports = calculateNumber;