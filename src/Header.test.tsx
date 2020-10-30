import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Render >> Header test', () => {
test('renders page title', () => {
  render(<Header />)
  const textElement = screen.getByText(/プケプケ/i)
  expect(textElement).toBeInTheDocument()
})
})
