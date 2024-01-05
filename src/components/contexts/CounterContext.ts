import { createContext } from "react";

type CountContextType = {
  onlineCount: number;
  setOnlineCount(n: number): void;
};

export const CountInitialData = 0;

export const CountContext = createContext<CountContextType | null>(null);
