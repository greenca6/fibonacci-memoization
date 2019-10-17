const memo = {}

const fibonacciDp = (index, workDone) => {
  if (!!memo[`${index}`]) {
    return memo[`${index}`];
  }

  workDone.calls = workDone.calls + 1;
  
  if (index <= 2) {
    return 1;
  }

  const result = fibonacciDp(index - 1, workDone) + fibonacciDp(index - 2, workDone);
  memo[`${index}`] = result;

  return result;
};

module.exports = { fibonacciDp };
