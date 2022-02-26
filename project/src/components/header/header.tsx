import HeaderLogo from './headerLogo';
import HeaderUser from './headerUser';

function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <HeaderLogo />
          <HeaderUser />
        </div>
      </div>
    </header>
  );
}

export default Header;
