const fibonacci = (index, workDone) => {
  if (index <= 2) {
    return 1;
  }

  workDone.calls = workDone.calls + 1;

  return fibonacci(index - 1, workDone) + fibonacci(index - 2, workDone);
};

module.exports = { fibonacci };
