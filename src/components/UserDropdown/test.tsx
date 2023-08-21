import { render, screen } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'

import UserDropdown from '.'

const userName = 'John Doe'

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    render(<UserDropdown username={userName} />)

    expect(screen.getByText(/john doe/i)).toBeInTheDocument()
  })

  it('should render the menu', () => {
    render(<UserDropdown username={userName} />)

    // open menu
    userEvent.click(screen.getByText(/john doe/i))

    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument()
  })
})
