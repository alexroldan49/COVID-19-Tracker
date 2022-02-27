import logo from './logo.svg';
import './App.css';
import MainPage from './components/MainPage';
import {Routes, Route} from 'react-router-dom'
import Country from './components/Country';
import Vaccines from './components/Vaccines';
import LearnMore from './components/LearnMore';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="Country" element={<Country/>} />
        <Route path="Vaccines" element={<Vaccines />} />
        <Route path="Learn-more" element={<LearnMore />} />
      </Routes>
    </div>
  );
}

export default App;
