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

export default App;
