export const useGenerateNumber = (min, max) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  if (randomNumber > 800) return randomNumber;
  else if (799 > randomNumber > 600)
    return Math.floor(Math.random() * (434 - 1 + 1)) + 1;
  else if (599 > randomNumber > 300)
    return Math.floor(Math.random() * (799 - 1 + 1)) + 1;
  else return randomNumber;
};

//898
