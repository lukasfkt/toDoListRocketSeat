import { Header } from "./components/Header/Header";
import { CreateItem } from "./components/CreateItem/CreateItem";
import { ToDoList } from "./components/TodoList/ToDoList";
import "./global.css";
import { useEffect, useState } from "react";
import { toDoItem } from "./models/ToDoItem";

export function App() {
  const [toDoItems, setToDoItems] = useState<toDoItem[]>([]);
  const [existToDoList, setExistToDoList] = useState(-1);

  useEffect(() => {
    const storageToDoList = localStorage.getItem("todoList")
      ? JSON.parse(localStorage.getItem("todoList")!)
      : [];
    if (storageToDoList.length > 0 && existToDoList == -1) {
      setExistToDoList(1);
      setToDoItems(storageToDoList);
    } else {
      localStorage.setItem("todoList", JSON.stringify(toDoItems));
    }
  });

  function createNewToDoItem(newToDoItem: toDoItem) {
    setToDoItems([...toDoItems, newToDoItem]);
  }

  function deleteItem(item: toDoItem) {
    const itemsWithoutDeletedOne = toDoItems.filter((todoItem) => {
      return todoItem !== item;
    });
    setToDoItems(itemsWithoutDeletedOne);
  }

  function changeItem(item: toDoItem) {
    const itemsWithChanges = toDoItems.filter((todoItem) => {
      if (todoItem == item) {
        return item;
      }
      return todoItem;
    });
    setToDoItems(itemsWithChanges);
  }

  return (
    <div className="App">
      <Header />
      <CreateItem onCreateToDoItem={createNewToDoItem} />
      <ToDoList
        toDoList={toDoItems}
        deleteItem={deleteItem}
        changeItem={changeItem}
      />
    </div>
  );
}
