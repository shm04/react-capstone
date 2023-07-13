import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Leagues from './components/leagues';
import About from './components/about'

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Leagues />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>
);

export default App;
