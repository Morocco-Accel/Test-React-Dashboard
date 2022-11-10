import { reactLocalStorage } from "reactjs-localstorage";

const TOKEN = "token";

export type TokenType = {
  access: string;
  refresh: string;
  email: string;
  role: string;
};

export function getItem<T>(key: string): T {
  const value = reactLocalStorage.get(key);
  return value ? JSON.parse(value.toString()) || null : null;
}

export async function setItem<T>(key: string, value: T) {
  reactLocalStorage.set(key, JSON.stringify(value));
}
export async function removeItem(key: string) {
  reactLocalStorage.remove(key);
}

export const getToken = () => getItem<TokenType>(TOKEN);
export const removeToken = () => removeItem(TOKEN);
export const setToken = (value: TokenType) => setItem<TokenType>(TOKEN, value);
