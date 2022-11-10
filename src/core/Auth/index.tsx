/// Auth.tsx
import create from "zustand";
import { getToken, setToken, removeToken, TokenType } from "./utils";
import { setHeaderToken, removeAuthHeader } from "api/client";
interface AuthState {
  token: TokenType | null;
  status: "idle" | "signOut" | "signIn";
  signIn: (data: TokenType) => void;
  signOut: () => void;
  hydrate: () => void;
}

export const useAuth = create<AuthState>((set, get) => ({
  status: "idle",
  token: null,
  signIn: (token) => {
    setToken(token);
    setHeaderToken(token.access);
    set({ status: "signIn", token });
    console.log(token.role);
  },
  signOut: () => {
    removeToken();
    removeAuthHeader();
    set({ status: "signOut", token: null });
  },
  hydrate: () => {
    try {
      const userToken = getToken();
      console.log({ userToken });
      if (userToken !== null) {
        get().signIn(userToken);
      } else {
        get().signOut();
      }
    } catch (e) {
      // catch error here
      // Maybe sign_out user!
    }
  },
}));

export const signOut = () => useAuth.getState().signOut();
export const hydrateAuth = () => useAuth.getState().hydrate();
