import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './style/App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Bad from './pages/404';
import About from './pages/About';
import Homoscope from './pages/Homoscope';
import SingNShit from './pages/SingNShit';
import Gossip from './pages/Gossip';
import Tea from './pages/Tea';

function App() {

  return (
    <div className="App">
      <p>שבוע טוב היום!</p>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/homoscope" element={<Homoscope />} />
        <Route path="/singNshit" element={<SingNShit />} />
        <Route path="/gossip" element={<Gossip />} />
        <Route path="/teacup" element={<Tea />} />
        <Route path="/*" element={<Bad />} />
      </Routes>
      <Footer className="Footer" />
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}


/* import './style/App.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';

import { Route, Routes, useNavigate } from 'react-router-dom';
import Bad from './pages/404';
import About from './pages/About';
import Homoscope from './pages/Homoscope';
import SingNShit from './pages/SingNShit';
import Gossip from './pages/Gossip';

function App() {

  const navigate = useNavigate();

  return (
    <div className="App">
      <p>
        שבוע טוב היום!
      </p>
      <Navbar navigate={navigate}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/homoscope" element={<Homoscope/>} />
        <Route path="/singNshit" element={<SingNShit/>} />
        <Route path="/gossip" element={<Gossip/>} />
        <Route path="/*" element={<Bad/>} />
      </Routes>
      <Footer className="Footer"/>
    </div>
  );
}

export default App;
 */