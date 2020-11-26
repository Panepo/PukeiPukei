import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('Render >> Content test', () => {
  test('renders content text', () => {
    render(<App />)
    const textElement1 = screen.getByText(/Status/i)
    expect(textElement1).toBeInTheDocument()

    const textElement2 = screen.getByText(/Results/i)
    expect(textElement2).toBeInTheDocument()
  })
})
