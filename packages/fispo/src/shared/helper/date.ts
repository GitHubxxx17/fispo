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
  return arr.sort((a, b) => {
    // 将日期字符串转换为 Date 对象（处理 "YYYY-MM-DD" 格式兼容性问题）
    const dateA = new Date(a.date.replace(/-/g, "/")).getTime();
    const dateB = new Date(b.date.replace(/-/g, "/")).getTime();

    // 降序排序（最新日期在前）
    return dateB - dateA;
  });
}

/**
 * 计算两个日期之间的天数差（绝对值）
 * @param date1 - 第一个日期（支持 Date 对象、ISO 字符串或时间戳）
 * @param date2 - 第二个日期（支持 Date 对象、ISO 字符串或时间戳）
 * @param options - 可选配置
 * @param options.includeEndDate - 是否包含结束日期（默认为 false）
 * @param options.timeZone - 指定时区（如 "Asia/Shanghai"），默认为本地时区
 * @returns 两个日期之间的天数差（绝对值）
 * @example
 * getDateDiff('2023-01-01', '2023-01-10') // 返回 9
 * getDateDiff(new Date('2023-01-01'), new Date('2023-01-10'), { includeEndDate: true }) // 返回 10
 */
export function getDateDiff(
  date1: Date | string | number,
  date2: Date | string | number,
  options: { includeEndDate?: boolean; timeZone?: string } = {}
): number {
  // 转换为 Date 对象
  const d1 = normalizeDate(date1, options.timeZone);
  const d2 = normalizeDate(date2, options.timeZone);

  // 计算时间戳差值（毫秒）
  const timeDiff = Math.abs(d2.getTime() - d1.getTime());

  // 转换为天数
  const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  // 是否包含结束日期（+1天）
  return options.includeEndDate ? daysDiff + 1 : daysDiff;
}

/**
 * 将各种日期格式规范化为 Date 对象（按指定时区处理）
 */
function normalizeDate(date: Date | string | number, timeZone?: string): Date {
  // 处理时间戳
  if (typeof date === "number") {
    return new Date(date);
  }

  // 处理 Date 对象
  if (date instanceof Date) {
    return timeZone
      ? createDateInTimeZone(date, timeZone)
      : new Date(date.getTime());
  }

  // 处理字符串（ISO 格式或其他格式）
  const parsedDate = new Date(date);
  if (!isNaN(parsedDate.getTime())) {
    return timeZone ? createDateInTimeZone(parsedDate, timeZone) : parsedDate;
  }

  throw new Error(`Invalid date format: ${date}`);
}

/**
 * 在指定时区创建 Date 对象（处理时区差异）
 */
function createDateInTimeZone(date: Date, timeZone: string): Date {
  // 使用 Intl.DateTimeFormat 格式化日期为指定时区的字符串
  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone,
  });

  // 解析格式化后的字符串为本地日期
  const [month, day, year] = formatter.format(date).split("/").map(Number);

  return new Date(year, month - 1, day);
}

/**
 * 从日期数组中获取最近或最远的日期
 * @param dates - 日期数组（支持 Date 对象、ISO 字符串或时间戳）
 * @param options - 可选配置
 * @param options.type - 获取类型，'recent'（最近）或 'farthest'（最远），默认为 'recent'
 * @param options.timeZone - 指定时区（如 "Asia/Shanghai"），默认为本地时区
 * @returns 最近或最远的日期（如果数组为空则返回 null）
 * @example
 * getExtremeDate(['2023-01-01', '2023-01-10', '2023-01-05']) // 返回 2023-01-10
 * getExtremeDate([new Date('2023-01-01'), new Date('2023-01-10')], { type: 'farthest' }) // 返回 2023-01-01
 */
export function getExtremeDate(
  dates: Array<Date | string | number>,
  options: { type?: "recent" | "farthest"; timeZone?: string } = {}
): Date | null {
  if (!dates || dates.length === 0) return null;

  const { type = "recent", timeZone } = options;
  const comparator =
    type === "recent"
      ? (a: Date, b: Date) => a > b
      : (a: Date, b: Date) => a < b;

  let extremeDate = normalizeDate(dates[0], timeZone);

  for (let i = 1; i < dates.length; i++) {
    const currentDate = normalizeDate(dates[i], timeZone);
    if (comparator(currentDate, extremeDate)) {
      extremeDate = currentDate;
    }
  }

  return extremeDate;
}
