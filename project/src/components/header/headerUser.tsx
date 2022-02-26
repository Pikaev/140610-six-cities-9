import { Link } from 'react-router-dom';

function HeaderUser(): JSX.Element {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <a className="header__nav-link header__nav-link--profile" href="/">
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <Link to="/favorites" className="header__user-name user__name"><span>Oliver.conner@gmail.com</span></Link>
          </a>
        </li>
        <li className="header__nav-item">
          <a className="header__nav-link" href="/">
            <span className="header__signout">Sign out</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderUser;
