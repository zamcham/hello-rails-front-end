import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Greeting from './components/Greeting';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>Refresh for a new greeting</h1>
          <Greeting />
        </header>
      </div>
    </Provider>
  );
}

export default App;
