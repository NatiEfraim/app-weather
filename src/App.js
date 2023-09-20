// import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppWeather from './componenet/appWeather';

function App() {
  return (
    <BrowserRouter>
      <AppWeather></AppWeather>
    </BrowserRouter>
 
  );
}

export default App;
