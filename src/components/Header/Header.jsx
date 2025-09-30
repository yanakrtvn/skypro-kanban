import { useState, useRef, useEffect } from "react";
import { 
  SHeader,
  SHeaderBlock,
  SHeaderLogo,
  SHeaderNav,
  SHeaderButton,
  SHeaderUser,
  SHeaderUserMenu,
  SUserMenuName,
  SUserMenuEmail,
  SUserMenuTheme,
  SUserMenuButton,
} from "./Header.styled";
import { Link } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext';

function Header({ onNewCardClick, onExitClick }) {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);
  const { userData } = useAuth();

  const userClick = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNewCardClick = (e) => {
    e.preventDefault();
    if (onNewCardClick) {
      onNewCardClick();
    }
  };

  const handleExitClick = (e) => {
    e.preventDefault();
    setUserMenuOpen(false);
    if (onExitClick) {
      onExitClick();
    }
  };

  const userName = userData?.name || "Иван Иванов";
  const userEmail = userData?.email || "ivan.ivanov@gmail.com";

  return (
    <SHeader>
      <SHeaderBlock>
        <SHeaderLogo className="_show _light">
          <Link to="/">
            <img src="images/logo.png" alt="logo" />
          </Link>
        </SHeaderLogo>
        <SHeaderLogo className="_dark">
          <Link to="/">
            <img src="images/logo_dark.png" alt="logo" />
          </Link>
        </SHeaderLogo>
        <SHeaderNav>
          <SHeaderButton 
            className="_hover01" 
            id="btnMainNew"
            onClick={handleNewCardClick}
          >
            <a href="#" onClick={handleNewCardClick}>Создать новую задачу</a>
          </SHeaderButton>
          <SHeaderUser 
            className="_hover02" 
            onClick={userClick}
            $active={userMenuOpen}
          >
            {userName}
            <svg 
              width="12" 
              height="7" 
              viewBox="0 0 12 7" 
              fill="none"
              style={{ 
                marginLeft: '8px',
                transform: userMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease'
              }}
            >
              <path d="M1 1L6 6L11 1" stroke="#94A6BE" strokeWidth="1.5"/>
            </svg>
          </SHeaderUser>
          <SHeaderUserMenu 
            ref={userMenuRef}
            className="header__pop-user-set pop-user-set"
            id="user-set-target"
            $visible={userMenuOpen}
          >
            <SUserMenuName>{userName}</SUserMenuName>
            <SUserMenuEmail>{userEmail}</SUserMenuEmail>
            <SUserMenuTheme>
              <p>Темная тема</p>
              <label className="theme-switch">
                <input type="checkbox" className="checkbox" name="checkbox" />
                <span className="theme-slider"></span>
              </label>
            </SUserMenuTheme>
            <SUserMenuButton 
              type="button" 
              className="_hover03"
              onClick={handleExitClick}
            >
              <a href="#" onClick={handleExitClick}>Выйти</a>
            </SUserMenuButton>
          </SHeaderUserMenu>
        </SHeaderNav>
      </SHeaderBlock>
    </SHeader>
  );
}

export default Header;