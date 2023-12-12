import { listReducer } from "@/reducers/listReducer";
import { Item } from "@/types/item";
import { useReducer, useState } from "react";

export const UseReducers = () => {
  const [list, dispatch] = useReducer(listReducer, []);
  const [addField, setAddField] = useState("");

  //isso tudo vai ser substituido para o reducer
  // const [list, setList] = useState<Item[]>([]);

  //adicionando uma novo item a lista
  // const addNewItem = (text: string) => {
  //   setList([...list, { id: list.length, text, done: false }]);
  // };

  //alterando o text com essa função
  // const editItemText = (id: number, newText: string) => {
  //   setList(
  //     list.map((t) => {
  //       if (t.id === id) t.text = newText;
  //       return t;
  //     })
  //   );
  // };

  //verificando se a lista está done
  // const toggleItem = (id: number) => {
  //   setList(
  //     list.map((t) => {
  //       if (t.id === id) t.done = !t.done;
  //       return t;
  //     })
  //   );
  // };

  // const removeItem = (id: number) => {
  //   setList(list.filter((t) => t.id != id));
  // };

  const handleAddButton = () => {
    //if para verificar se está vazio
    if (addField.trim() === "") return false;

    dispatch({
      type: "add",
      payload: {
        text: addField.trim(),
      },
    });

    setAddField("");
  };

  const handleDoneCheckbox = (id: number) => {
    dispatch({
      type: "toggleDone",
      payload: { id },
    });
    console.log("ID", id);
  };

  const handleEdit = (id: number) => {
    const item = list.find((it) => it.id === id);

    if (!item) return false;
    const newText = window.prompt("Editar tarefa", item.text);

    if (!newText || newText?.trim() === "") return false;

    dispatch({ type: "editText", payload: { id, newText } });
  };

  const handleRemove = (id: number) => {
    if (!window.confirm("Tem certeza que deseja excluir?")) return false;

    dispatch({ type: "remove", payload: { id } });
  };

  return (
    <div className="container mx-auto ">
      <h1 className="text-center text-4xl my-4">Lista de Tarefas</h1>
      <div className="flex rounded-md border border-gray-400 p-4 my-4 mx-auto max-w-4xl bg-gray-100">
        <input
          type="text"
          className="flex-1 rounded-md border border-gray-600 p-3 bg-transparent outline-none"
          placeholder="Digite um item"
          value={addField}
          onChange={(e) => setAddField(e.target.value)}
        />
        <button className="p-4" onClick={handleAddButton}>
          Adicionar
        </button>
      </div>
      <ul className="mx-auto max-w-4xl">
        {list.map((item) => (
          <li key={item.id} className="flex p-3 my-3 border-b border-gray-700">
            <input
              type="checkbox"
              className="w-6 h-6 mr-4"
              defaultChecked={item.done}
              onClick={() => handleDoneCheckbox(item.id)}
            />
            <p className="flex-1 text-lg">{item.text}</p>
            <button
              className="mx-4 hover:text-gray-500"
              onClick={() => handleEdit(item.id)}
            >
              Editar
            </button>
            <button
              className="mx-4 hover:text-gray-500"
              onClick={() => handleRemove(item.id)}
            >
              Excluir
            </button>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};
