import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Starts from './pages/Starts';
import Gallery from './pages/Gallery';
import Battle from './pages/Battle';
import Statistik from './components/Statistik';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Starts />}></Route>
        <Route path='/gallery' element={<Gallery />}></Route>
        <Route path='/battle' element={<Battle />}></Route>
        <Route path='/statistik' element={<Statistik />}></Route>
      </Routes>
    </Router>
   
  );
}

export default App;
