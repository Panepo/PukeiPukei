import React from 'react'
import { render, screen } from '@testing-library/react'
import Content from './Content'

describe('Render >> Content test', () => {
  test('renders content text', () => {
    render(<Content />)
    const textElement = screen.getByText(
      /Status/i
    )
    expect(textElement).toBeInTheDocument()
  })
})
