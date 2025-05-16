/**
 * 内存存储降级方案
 * 当 localStorage/sessionStorage 不可用时自动启用
 */
class MemoryStorage {
  private storage: Record<string, string> = {};

  getItem(key: string): string | null {
    return this.storage[key] || null;
  }

  setItem(key: string, value: string): void {
    this.storage[key] = value;
  }

  removeItem(key: string): void {
    delete this.storage[key];
  }

  clear(): void {
    this.storage = {};
  }
}

export const inBrowser = () => typeof window !== "undefined";

/**
 * 检查存储类型是否可用
 * @param type - 存储类型：'local' 或 'session'
 * @returns 存储对象或 null
 */
function getStorage(type: "local" | "session"): Storage | MemoryStorage | null {
  if (!inBrowser()) {
    return;
  }
  try {
    const storage = type === "local" ? localStorage : sessionStorage;
    const testKey = "__storage_test__";

    // 测试存储是否真正可用（某些隐私模式下可能抛出异常）
    storage.setItem(testKey, testKey);
    storage.removeItem(testKey);

    return storage;
  } catch {
    console.warn(`[Storage] ${type}Storage 不可用，将使用内存存储降级方案`);
    return new MemoryStorage();
  }
}

/**
 * 从本地存储中获取数据（支持降级策略）
 * @param name - 存储键名
 * @returns 解析后的对象数据，若不存在或解析失败则返回 null
 */
export function localGetData(name: string) {
  const storage = getStorage("local");
  if (!storage) return null;

  const data = storage.getItem(name);
  if (data !== null) {
    try {
      return JSON.parse(data);
    } catch (error) {
      console.error(`解析本地存储数据失败: ${name}`, error);
      return null;
    }
  }

  return null;
}

/**
 * 从会话存储中获取数据（支持降级策略）
 * @param name - 存储键名
 * @returns 解析后的对象数据，若不存在或解析失败则返回 null
 */
export function sessionGetData(name: string) {
  const storage = getStorage("session");
  if (!storage) return null;

  const data = storage.getItem(name);
  if (data !== null) {
    try {
      return JSON.parse(data);
    } catch (error) {
      console.error(`解析会话存储数据失败: ${name}`, error);
      return null;
    }
  }

  return null;
}

/**
 * 将数据保存到本地存储（支持降级策略）
 * @param name - 存储键名
 * @param data - 要存储的数据（支持可序列化的对象）
 */
export function localSaveData(name: string, data: any) {
  const storage = getStorage("local");
  if (!storage) return;

  try {
    storage.setItem(name, JSON.stringify(data));
  } catch (error) {
    console.error(`保存本地存储数据失败: ${name}`, error);
  }
}

/**
 * 将数据保存到会话存储（支持降级策略）
 * @param name - 存储键名
 * @param data - 要存储的数据（支持可序列化的对象）
 */
export function sessionSaveData(name: string, data: any) {
  const storage = getStorage("session");
  if (!storage) return;

  try {
    storage.setItem(name, JSON.stringify(data));
  } catch (error) {
    console.error(`保存会话存储数据失败: ${name}`, error);
  }
}

/**
 * 从本地存储中移除数据
 * @param name - 存储键名
 */
export function localRemoveData(name: string) {
  const storage = getStorage("local");
  storage?.removeItem(name);
}

/**
 * 从会话存储中移除数据
 * @param name - 存储键名
 */
export function sessionRemoveData(name: string) {
  const storage = getStorage("session");
  storage?.removeItem(name);
}

/**
 * 清空本地存储
 */
export function localClear() {
  const storage = getStorage("local");
  storage?.clear();
}

/**
 * 清空会话存储
 */
export function sessionClear() {
  const storage = getStorage("session");
  storage?.clear();
}
