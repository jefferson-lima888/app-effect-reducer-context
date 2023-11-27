import { useEffect } from "react";

export const Square = () => {
  useEffect(() => {
    console.log("Rodou o effect do quadrado...Conectado");
    window.addEventListener("scroll", () => {});

    return () => {
      console.log("Rodou o CleanUP....Desconectado");
      window.removeEventListener("scroll", () => {});
    };
  });

  return <div className="w-40 h-40 bg-red-400"></div>;
};
