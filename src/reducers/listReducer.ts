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
  switch (action.type) {
    case "add":
      return [
        ...list,
        {
          id: list.length,
          text: action.payload.text,
          done: false,
        },
      ];
    case "editText":
      return list.map((t) => {
        if (t.id === action.payload.id) t.text = action.payload.newText;
        return t;
      });
    case "toggleDone":
      return list.map((t) => {
        if (t.id === action.payload.id) t.done = !t.done;
        return t;
      });

    // return list.map((task) => {
    //   if (task.id === action.payload.id) {
    //     return { ...task, done: !task.done };
    //   } else {
    //     return list;
    //   }
    // });
    case "remove":
      return list.filter((t) => t.id != action.payload.id);
    default:
      return list;
  }
  // return list;
};
