import { useState } from "react";
import { Header } from "./Header";
import {
  CountContext,
  CountInitialData,
  CountProvider,
} from "./contexts/CounterContext";

export const ExemploContext = () => {
  // const [onlineCount, setOnlineCount] = useState(92);

  return (
    <div className="container mx-auto flex max-w-4xl my-8">
      {/* <CountContext.Provider value={{ onlineCount, setOnlineCount }}>
        <Header />
      </CountContext.Provider> */}

      <CountProvider>
        <Header />
      </CountProvider>
    </div>
  );
};
