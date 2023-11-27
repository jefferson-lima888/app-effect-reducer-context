import { useEffect, useState } from "react";
import { PlayerUseEffect } from "./PlayerUseEffect";
import { UseCleanUp } from "./UseCleanUp";

export const UseEffect = () => {
  const [name, setName] = useState("Jeff");
  const [age, setAge] = useState(90);
  const [firstName, setFirstName] = useState("Isa");
  const [lastName, setLastName] = useState("Lima");

  useEffect(() => {
    console.log("Rodou o effect");
  }, [age]);

  const handleFullName = () => {
    setFirstName("Maria");
    setLastName("Silva");
  };

  return (
    <div className="flex flex-col items-center justify-between p-24">
      <p>
        Meu nome é : {name} e eu tenho {age} anos
      </p>
      <div>
        <button
          className="border border-blue-400 m-3 p-3"
          onClick={() => setName("Pedro")}
        >
          Mudar o nome para Pedro
        </button>
        <button
          className="border border-blue-400 m-3 p-3"
          onClick={() => setName("João")}
        >
          Mudar o nome para João
        </button>
      </div>
      <div>
        <button
          className="border border-blue-400 m-3 p-3"
          onClick={() => setAge(10)}
        >
          Mudar para 10 anos
        </button>
        <button
          className="border border-blue-400 m-3 p-3"
          onClick={() => setAge(90)}
        >
          Mudar para 90 anos
        </button>
      </div>

      <p className="mt-8">
        Meu nome completo é {firstName} {lastName}
      </p>
      <button
        className="border border-blue-400 m-3 p-3"
        onClick={handleFullName}
      >
        Mudar primeiro nome e sobrenome
      </button>
      <PlayerUseEffect />
      <UseCleanUp />
    </div>
  );
};
