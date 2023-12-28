import { Header } from "./Header";
import { CountContext, CountInitialData } from "./contexts/CounterContext";

export const ExemploContext = () => {
  return (
    <div className="container mx-auto flex max-w-4xl my-8">
      <CountContext.Provider value={CountInitialData}>
        <Header />
      </CountContext.Provider>
    </div>
  );
};
