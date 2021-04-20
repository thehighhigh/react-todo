import { useState, useEffect } from 'react'

import todoService from '../services/todos'

export default function useTodo() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    todoService.getAll().then(todos => {
      setTodos(todos.reverse())
    })
  }, [])

  const toggleTodo = (id, completed) => {
    const todo = todos.find(todo => todo.id === id)
    const newTodo = { ...todo, completed: !completed}

    todoService.update(id, newTodo).then(updatedTodo => {
      const newTodos = todos.map(todo =>
        todo.id !== updatedTodo.id ? todo : updatedTodo
      )
      setTodos(newTodos)
    })
  }

  const deleteTodo = id => {
    todoService.delete(id).then(deletedTodoId => {
      const newTodos = todos.filter(todo => todo.id !== deletedTodoId)
      setTodos(newTodos)
    })
  }

  return { todos, toggleTodo, deleteTodo }
}