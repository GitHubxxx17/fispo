export const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const getRandomTextSize = (size: number) => {
  return `${Math.min(size, 20) / 20 + 1}rem`;
};
