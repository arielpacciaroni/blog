import { render, screen } from '@testing-library/react'
import Layout from '.'
import '@testing-library/jest-dom'

describe('Layout', () => {
  it('renders the children element', () => {
    const children = <h1>Test</h1>
    render(<Layout>{children}</Layout>)

    const heading = screen.getByRole('heading', {
      name: /test/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
