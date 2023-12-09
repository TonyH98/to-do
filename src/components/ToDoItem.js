"use client"

// ToDoItem.js
import Link from "next/link";

export default function ToDoItem({ todo, toggleToDo, deleteToDo }) {
  return (
    <div>
      <input
        type="checkbox"
        defaultChecked={todo.complete}
        onChange={(e) => toggleToDo(todo.id, e.target.checked)}
      />

      <Link href={`/items/${todo.id}`}>
     
          <h1>{todo.title}</h1>
    
      </Link>

      <button onClick={() => deleteToDo(todo.id)}>Delete</button>
    </div>
  );
}
