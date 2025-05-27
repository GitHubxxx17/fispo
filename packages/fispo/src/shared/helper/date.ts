/**
 * 格式化日期对象为 "YYYY-MM-DD HH:MM:SS" 格式的字符串
 * @param date - 需要格式化的 Date 对象
 * @returns 格式化后的日期时间字符串
 * @example
 * formatDate(new Date('2023-01-01T12:34:56')) // 返回 "2023-01-01 12:34:56"
 */
export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  // 月份从 0 开始，需 +1 并补零
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
};

/**
 * 将日期字符串转换为 "YYYY-MM-DD" 格式
 * @param dateStr - 日期字符串（支持 ISO 格式或 "YYYY/MM/DD" 格式）
 * @returns 格式化后的日期字符串
 * @example
 * formatDateToYYYYMMDD('2023/01/01') // 返回 "2023-01-01"
 * formatDateToYYYYMMDD('2023-01-01T12:00:00') // 返回 "2023-01-01"
 */
export function formatDateToYYYYMMDD(dateStr: string): string {
  // 创建 Date 对象（兼容 ISO 格式和 "YYYY/MM/DD" 格式）
  const date = new Date(dateStr);

  // 处理无效日期
  if (isNaN(date.getTime())) {
    throw new Error(`Invalid date string: ${dateStr}`);
  }

  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 月份从 0 开始
  const day = date.getDate();

  // 补零处理（确保两位数字）
  const formattedMonth = String(month).padStart(2, "0");
  const formattedDay = String(day).padStart(2, "0");

  return `${year}-${formattedMonth}-${formattedDay}`;
}

/**
 * 按对象的 date 属性进行降序排序（最新日期在前）
 * @param arr - 包含 date 属性的对象数组
 * @returns 排序后的新数组
 * @remarks
 * 1. 支持 ISO 格式或 "YYYY-MM-DD" 格式的日期字符串
 * 2. 使用时间戳比较确保排序准确性
 * @example
 * sortByDate([{date: '2023-01-02'}, {date: '2023-01-01'}])
 * // 返回 [{date: '2023-01-02'}, {date: '2023-01-01'}]
 */
export function sortByDate(
  arr: Array<{ date: string }>
): Array<{ date: string }> {
  return [...arr].sort((a, b) => {
    // 将日期字符串转换为 Date 对象（处理 "YYYY-MM-DD" 格式兼容性问题）
    const dateA = new Date(a.date.replace(/-/g, "/"));
    const dateB = new Date(b.date.replace(/-/g, "/"));

    // 降序排序（最新日期在前）
    return dateB.getTime() - dateA.getTime();
  });
}
