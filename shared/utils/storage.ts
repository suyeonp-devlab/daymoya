/** 로컬스토리지 값 조회, 저장, 삭제 */
export const appLocalStorage = {
  get: <T>(key: string): T | null => {
    if (typeof window === "undefined") return null;
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  },

  set: (key: string, value: unknown): void => {
    if (typeof window === "undefined") return;
    localStorage.setItem(key, JSON.stringify(value));
  },

  remove: (key: string): void => {
    if (typeof window === "undefined") return;
    localStorage.removeItem(key);
  },
};