import { useState } from "react";
import { 
  SHeader,
  SHeaderBlock,
  SHeaderLogo,
  SHeaderNav,
  SHeaderButton,
  SHeaderUser,
  SHeaderUserMenu 
} from "./Header.styled";

function Header() {
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const userClick = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  return (
    <SHeader>
      <div className="container">
        <SHeaderBlock>
          <SHeaderLogo className="_show _light">
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </SHeaderLogo>
          <SHeaderLogo className="_dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </SHeaderLogo>
          <SHeaderNav>
            <SHeaderButton className="_hover01" id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </SHeaderButton>
            <SHeaderUser className="_hover02" onClick={userClick}>
              Ivan Ivanov
            </SHeaderUser>
            <SHeaderUserMenu 
              className="header__pop-user-set pop-user-set"
              id="user-set-target"
              $visible={userMenuOpen}
            >
              <p className="pop-user-set__name">Ivan Ivanov</p>
              <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
              <div className="pop-user-set__theme">
                <p>Темная тема</p>
                <input type="checkbox" className="checkbox" name="checkbox" />
              </div>
              <button type="button" className="_hover03">
                <a href="#popExit">Выйти</a>
              </button>
            </SHeaderUserMenu>
          </SHeaderNav>
        </SHeaderBlock>
      </div>
    </SHeader>
  );
}

export default Header;
