export const join = function (
  value: string,
  ...strings: [string | undefined] | string[]
) {
  return strings.reduceRight((previousValue, currentValue) => {
    if (currentValue) return previousValue + " " + currentValue;
    return previousValue;
  }, value) as string;
};
