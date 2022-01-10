import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Banner />
        <RowPost />
      </header>
    </div>
  );
}

export default App;