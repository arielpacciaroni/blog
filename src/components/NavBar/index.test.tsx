import { render } from '@testing-library/react'
import NavBar from '.'
import '@testing-library/jest-dom'

describe('NavBar', () => {
  it('renders navbar unchanged', () => {
    const { container } = render(<NavBar />)
    expect(container).toMatchSnapshot()
  })
})
