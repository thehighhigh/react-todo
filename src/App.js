import React from 'react'
import TodoList from './components/TodoList'
import useTodo from './hooks/useTodo'

function App() {
  const { todos, toggleTodo, deleteTodo } = useTodo()

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
