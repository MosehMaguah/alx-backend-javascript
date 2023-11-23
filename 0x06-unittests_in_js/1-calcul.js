function calculateNumber (type, a, b) {
    const ar = math.round(a);
    const br = math.round(b);
    let c = 0;
    switch (type) {
    case 'SUM':
        c = ar + br;
        break;
        
    case 'SUBTRACT':
        c = ar - br;
        break;

    case 'DIVIDE':
        if (br === 0) {
            c = "Error";
        }
        else {
            c = ar / br;
        }
        break;
    }
    return c;
}

module.exports = calculateNumber;