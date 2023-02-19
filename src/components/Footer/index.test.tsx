import { render } from '@testing-library/react'
import Footer from '.'
import '@testing-library/jest-dom'

describe('Footer', () => {
  it('renders footer unchanged', () => {
    const { container } = render(<Footer />)
    expect(container).toMatchSnapshot()
  })
})
