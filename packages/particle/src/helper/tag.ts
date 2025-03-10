const colors = [
  "#03a9f4",
  "#00bcd4",
  "#00a596",
  "#ff7d73",
  "#00bcd4",
  "#ffa2c4",
];

export function getRandomColor(): string {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
