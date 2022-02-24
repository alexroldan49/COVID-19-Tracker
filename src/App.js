import logo from './logo.svg';
import './App.css';
import MainPage from './components/MainPage';
import {Routes, Route} from 'react-router-dom'
import Country from './components/Country';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="country" element={<Country/>} />
      </Routes>
    </div>
  );
}

export default App;
