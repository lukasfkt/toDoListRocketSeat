import styles from "./CreateItem.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { toDoItem } from "../../models/ToDoItem";
import { v4 } from "uuid";

interface CreateItemProps {
  onCreateToDoItem: (toDoItem: toDoItem) => void;
}

export function CreateItem({ onCreateToDoItem }: CreateItemProps) {
  const [newToDoItemText, setToDoItemText] = useState("");

  function handleNewToDoItemChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setToDoItemText(event.target.value);
  }

  function handleNewToDoItemInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Este campo é obrigatório");
  }

  function handleCreateNewToDoItem(event: FormEvent) {
    event.preventDefault();

    const newToDoItem: toDoItem = {
      id: v4(),
      text: newToDoItemText,
      isDone: false,
    };
    setToDoItemText("");
    onCreateToDoItem(newToDoItem);
  }

  return (
    <form
      onSubmit={handleCreateNewToDoItem}
      className={styles.createItemContainer}
    >
      <input
        className={styles.inputBar}
        type="text"
        value={newToDoItemText}
        placeholder="Adicione uma nova tarefa"
        onChange={handleNewToDoItemChange}
        onInvalid={handleNewToDoItemInvalid}
        required
      ></input>
      <button type="submit" className={styles.buttonCreate}>
        Criar <AiOutlinePlusCircle />
      </button>
    </form>
  );
}
