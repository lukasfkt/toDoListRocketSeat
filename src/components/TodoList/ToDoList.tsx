import styles from "./ToDoList.module.css";
import clipboard from "../../assets/Clipboard.svg";
import { useState } from "react";
import { Item } from "../Items/Item";
import { toDoItem } from "../../models/ToDoItem";

interface toDoListProps {
  toDoList: toDoItem[];
  deleteItem: (item: toDoItem) => void;
  changeItem: (item: toDoItem) => void;
}

export function ToDoList({ toDoList, deleteItem, changeItem }: toDoListProps) {
  function passDeleteItemToApp(item: toDoItem) {
    deleteItem(item);
  }

  function passChangedItemToApp(item: toDoItem) {
    changeItem(item);
  }

  function noItems() {
    return (
      <div className={styles.noItems}>
        <img src={clipboard} alt="Icone clipboard" />
        <div className={styles.notFoundTexts}>
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
    );
  }

  function withItems() {
    return (
      <div className={styles.toDoListItems}>
        {toDoList.map((item) => {
          return (
            <Item
              key={item.id}
              item={item}
              onDeleteItem={passDeleteItemToApp}
              onChangeItemStatus={passChangedItemToApp}
            />
          );
        })}
      </div>
    );
  }

  function countFinishedItems() {
    const finshedItems = toDoList.filter((item) => {
      return item.isDone;
    });
    return finshedItems.length;
  }

  return (
    <div className={styles.toDoListContainer}>
      <header className={styles.headerToDoList}>
        <div className={styles.createdTasksContainer}>
          <h3>Tarefas criadas</h3>
          <span>{toDoList.length}</span>
        </div>
        <div className={styles.finishedTasksContainer}>
          <h3>Concluidas</h3>
          <span>{countFinishedItems()}</span>
        </div>
      </header>

      <section>{toDoList.length == 0 ? noItems() : withItems()}</section>
    </div>
  );
}
