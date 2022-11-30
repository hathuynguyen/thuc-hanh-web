import './App.css';
import Header from './Component/Header';
import DatingCards from './Component/DatingCard';
import SwipeButtons from './Component/SwipeButtons';

function App() {
  return (
    <div className="App">
      <Header/>
      <DatingCards/>
      <SwipeButtons/>
    </div>
  );
}

export default App;
