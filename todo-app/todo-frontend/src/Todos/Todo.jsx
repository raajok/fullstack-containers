import React from 'react'

const Todo = ({ todo, deleteTodo, completeTodo }) => {
  const doneInfo = (
    <>
      <span>This todo is done</span>
      <span>
        <button onClick={deleteTodo(todo)}> Delete </button>
      </span>
    </>
  )

  const notDoneInfo = (
    <>
      <span>
        This todo is not done
      </span>
      <span>
        <button onClick={deleteTodo(todo)}> Delete </button>
        <button onClick={completeTodo(todo)}> Set as done </button>
      </span>
    </>
  )

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '70%', margin: 'auto' }}>
      <span>
        {todo.text} 
      </span>
      {todo.done ? doneInfo : notDoneInfo}
    </div>
  )
}

export default Todo



// For some reason the delete is not working on the backend: "req.todo.delete" is not a function.
// use docker compose -f docker-compose.dev.yml down -v for clearing everything
// and docker compose -f docker-compose.dev.yml up to rerun
// run those from todo-app folder
// exercise 19 goal is to get the whole app running through one compose file
// hot-loading fixes is already working, and all features outside of delete are working