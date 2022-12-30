import { Link } from 'react-router-dom';

export const Header = () => (
  <nav className='lime'>
    <div className='nav-wrapper'>
      <Link to='/' className='brand-logo'>
        React Shop
      </Link>
      <ul
        id='nav-mobile'
        className='right hide-on-med-and-down'
      >
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </div>
  </nav>
);
