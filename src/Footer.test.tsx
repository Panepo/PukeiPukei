import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Render >> Footer test', () => {
  test('renders page footer text', () => {
    render(<Footer />)
    const textElement = screen.getByText(
      /Panepo@Github 2020 All Rights Reserved./i
    )
    expect(textElement).toBeInTheDocument()
  })
})
