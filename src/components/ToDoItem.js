"use client"

export default function ToDoItem({todo, toggleToDo, deleteToDo}){

    console.log(todo)

    return(
        <div>
            <input
            type="checkbox"
            defaultChecked={todo.complete}
            onChange={e => toggleToDo(todo.id, e.target.checked)}
            />
            <h1>{todo.title}</h1>
            <button onClick={() => deleteToDo(todo.id)}>Delete</button>
        </div>
    )
}