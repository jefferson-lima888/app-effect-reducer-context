import { Item } from "@/types/item";
import { useState } from "react";
export const UseReducers = () => {
  const [list, setList] = useState<Item[]>([]);

  //adicionando uma novo item a lista
  const addNewItem = (text: string) => {
    setList([...list, { id: list.length, text, done: false }]);
  };

  //alterando o text com essa função
  const editItemText = (id: number, newText: string) => {
    setList(
      list.map((t) => {
        if (t.id === id) t.text = newText;
        return t;
      })
    );
  };

  //verificando se a lista está done
  const toggleItem = (id: number) => {
    setList(
      list.map((t) => {
        if (t.id === id) t.done = !t.done;
        return t;
      })
    );
  };

  const removeItem = (id: number) => {
    setList(list.filter((t) => t.id != id));
  };

  return <div></div>;
};
