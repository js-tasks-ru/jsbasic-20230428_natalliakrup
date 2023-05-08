function sumSalary(salaries) {
  let salaryValues = Object.values(salaries).filter(value => {
    return typeof value === 'number' && isFinite(value);
  });
  return salaryValues.reduce((accum, values) => accum + values, 0);
}
