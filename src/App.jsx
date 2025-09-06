import PopExit from './components/PopExit/PopExit.jsx';
import PopNewCard from './components/PopNewCard/PopNewCard.jsx';
import PopBrowse from './components/PopBrowse/PopBrowse.jsx';
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';

function App() {
  return (
    <div className="wrapper">
      {/* <PopExit />
      <PopNewCard />
      <PopBrowse /> */}
      <Header />
      <Main />
    </div>
  );
}

export default App;