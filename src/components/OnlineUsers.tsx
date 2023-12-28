import { useContext } from "react";
import { CountContext } from "./contexts/CounterContext";

export const OnlineUsers = () => {
  const count = useContext(CountContext);

  return <p>Online: {count}</p>;
};
