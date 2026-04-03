import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Todo from '../src/Todos/Todo'

// For some reason the test fails on my environment because of the @rolldown library,
// but works when building the docker image
test('Todo shows text', () => {
  const todo = {
    text: "text shown",
    done: true
  }

  render(<Todo todo={todo} deleteTodo={() => undefined} completeTodo={() => undefined} />)
  expect(screen.getByText(todo.text)).toBeInTheDocument()
})