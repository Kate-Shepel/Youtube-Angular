export const createRandomNumber = (max: number): number => {
  const minValue = Math.ceil(0);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
};
