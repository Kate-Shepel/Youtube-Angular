export const generateRandomNumber = (max: number): number => {
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * maxValue);
};
