<<<<<<< Updated upstream
import { Route, Routes } from 'react-router-dom';
import Greeting from './components/Greeting';

const App = () => (
  <Routes>
    <Route path="/" element={<Greeting />} />
  </Routes>
);
=======
import './App.css';
import GreetingsComponent from './components/GreetingsComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Refresh for a new greeting</h1>
        <GreetingsComponent />
      </header>
    </div>
  );
}
>>>>>>> Stashed changes

export default App;
