// Write your JS code here
import {Link} from 'react-router-dom'
import LogoutButton from '../LogoutButton'

const Header = () => (
  <div>
    <ul>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/about">
        <li>About</li>
      </Link>
    </ul>
    <LogoutButton />
  </div>
)

export default Header
