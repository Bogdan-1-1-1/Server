function isPrime(n) {
    for(let i = 2; i < Math.sqrt(n)+1; i++) {
        if(n % i === 0) return false;
    }
    return n > 1;
}

function nthPrime(n) {
    let counter = n
    let iterator = 2
    let result = []

    while(counter > 0) {
        isPrime(iterator) && result.push(iterator) && counter--
        iterator++
    }

    return result;
}

export default nthPrime