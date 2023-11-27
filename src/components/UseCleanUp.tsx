import { useState } from "react";
import { Square } from "./Square";

export const UseCleanUp = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="mt-40">
      <p className="mb-6 ">Usando o Clean Up</p>
      <button onClick={() => setShow(!show)}>Mostrar/Ocultar</button>
      {show && <Square />}
    </div>
  );
};
