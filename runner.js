const { fibonacci } = require('./fibonacci');
const { fibonacciDp } = require('./fibonacci-dp');

const index = process.argv[2] || 10;
const workDone = { calls: 0 };
const workDoneDp = { calls: 0 };

const result = fibonacci(index, workDone);
console.log('Total recursive calls for standard alg: ' + workDone.calls + '\nResult: ' + result);

const resultDp = fibonacciDp(index, workDoneDp);
console.log('Total recursive calls for memoized alg: ' + workDoneDp.calls + '\nResult: ' + resultDp);