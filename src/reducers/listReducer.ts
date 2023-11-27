import { Item } from "@/types/item";

//Aqui e passada a tipagem de cada action
type AddAction = {
  type: "add";
  payload: { text: string };
};

type EditTextAction = {
  type: "editText";
  payload: {
    id: number;
    newText: string;
  };
};

type ToggleDoneAction = {
  type: "toggleDone";
  payload: { id: number };
};

type RemoveAction = {
  type: "remove";
  payload: { id: number };
};

type ListActions = AddAction | EditTextAction | ToggleDoneAction | RemoveAction;

export const listReducer = (list: Item[], action: ListActions) => {
  //Executa uma ação e retorna a new list

  return list;
};
