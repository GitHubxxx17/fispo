export function formatDateToYYYYMMDD(dateStr: string): string {
  // 创建 Date 对象
  const date = new Date(dateStr);
  // 获取年份
  const year = date.getFullYear();
  // 获取月份（注意：getMonth() 返回值从 0 开始，所以要加 1）
  const month = date.getMonth() + 1;
  // 获取日期
  const day = date.getDate();

  // 将月份和日期转换为两位数格式，如果不足两位则在前面补 0
  const formattedMonth = String(month).padStart(2, "0");
  const formattedDay = String(day).padStart(2, "0");

  // 拼接成 YYYY-MM-DD 格式的字符串
  return `${year}-${formattedMonth}-${formattedDay}`;
}

export function sortByDate(arr: Array<any>) {
  return arr.sort((a, b) => {
    // 将日期字符串转换为 Date 对象
    const dateA = new Date(a.date.replace(/-/g, "/"));
    const dateB = new Date(b.date.replace(/-/g, "/"));

    // 比较两个日期的时间戳
    return Number(dateB) - Number(dateA);
  });
}
