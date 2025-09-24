import { useState } from 'react';
import AppRoutes from './components/AppRoutes';
import { GlobalStyles } from './components/GlobalStyles.styled';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState(null);

  return (
    <div className="wrapper">
      <GlobalStyles />
      <AppRoutes 
        isAuth={isAuth}
        setIsAuth={setIsAuth}
        userData={userData}
        setUserData={setUserData}
      />
    </div>
  );
}

export default App;