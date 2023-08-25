import { Route, Routes } from 'react-router-dom';
import Greeting from './components/Greeting';

const App = () => (
  <React.StrictMode>
    <Routes>
      <Route path="/" element={<Greeting />} />
    </Routes>
  </React.StrictMode>
);

export default App;