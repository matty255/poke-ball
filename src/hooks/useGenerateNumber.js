export const useGenerateNumber = (min, max) => {
  const randNum = Math.floor(Math.random() * (max - min + 1)) * 10;
  return randNum;
};
