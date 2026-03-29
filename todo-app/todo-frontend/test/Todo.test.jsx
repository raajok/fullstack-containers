import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Todo from '../src/Todos/Todo'

test('Todo shows text', () => {
  const todo = {
    text: "text shown",
    done: true
  }

  render(<Todo todo={todo} />)
  expect(screen.getByText(todo.text)).toBeInTheDocument()
})