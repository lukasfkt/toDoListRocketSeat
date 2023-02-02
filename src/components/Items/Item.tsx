import styles from "./Item.module.css";
import { HiOutlineTrash } from "react-icons/hi";
import { toDoItem } from "../../models/ToDoItem";

interface itemProps {
  item: toDoItem;
  onDeleteItem: (item: toDoItem) => void;
  onChangeItemStatus: (item: toDoItem) => void;
}

export function Item({ item, onDeleteItem, onChangeItemStatus }: itemProps) {
  function handleDeleteItem() {
    onDeleteItem(item);
  }

  function handleChangeItem() {
    if (item.isDone) {
      item.isDone = false;
    } else {
      item.isDone = true;
    }
    onChangeItemStatus(item);
  }

  return (
    <div
      className={styles.itemContainer}
      style={
        item.isDone
          ? { background: "var(--gray-500)" }
          : {
              background: "var(--gray-400)",
              border: "1px solid var(--gray-400)",
            }
      }
    >
      <input
        type="checkbox"
        defaultChecked={item.isDone}
        className={styles.itemCheckbox}
        onChange={handleChangeItem}
      />
      <p
        className={styles.itemText}
        style={
          item.isDone
            ? { color: "var(--gray-300)", textDecoration: "line-through" }
            : { color: "var(--gray-100)" }
        }
      >
        {item.text}
      </p>
      <button onClick={handleDeleteItem}>
        <HiOutlineTrash size={18} />
      </button>
    </div>
  );
}
