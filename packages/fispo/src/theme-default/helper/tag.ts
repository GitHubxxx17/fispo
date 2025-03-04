export const getRandomColor = () => {
  // 生成随机的色相值，范围是 0 到 360
  const hue = Math.floor(Math.random() * 360);
  // 设定饱和度，这里固定为 70%，可以根据需要调整
  const saturation = 70;
  // 设定亮度范围，这里选择 30% 到 70% 之间，避免颜色过深或过浅
  const minLightness = 30;
  const maxLightness = 70;
  const lightness =
    Math.floor(Math.random() * (maxLightness - minLightness + 1)) +
    minLightness;

  // 将 HSL 颜色转换为十六进制颜色
  const hslToHex = (h: number, s: number, l: number) => {
    l /= 100;
    const a = (s * Math.min(l, 1 - l)) / 100;
    const f = (n: number) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color)
        .toString(16)
        .padStart(2, "0");
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  };

  return hslToHex(hue, saturation, lightness);
};

export const getRandomTextSize = (size: number) => {
  return `${Math.min(size, 20) / 20 + 1}rem`;
};
