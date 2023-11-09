import { AboutState, IncrementOption, OpositeButton } from './AboutState';
import { HeaderComponent } from './components/HeaderComponent';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { UseEffect } from './components/UseEffect';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/aboutstate' element={<AboutState />} />
            <Route path='/useeffect' element={<UseEffect />} />
            <Route path='/opositebutton' element={<OpositeButton />} />
            <Route path='/incrementoption' element={<IncrementOption />} />
            <Route path='/headercomponent' element={<HeaderComponent />} />
            <Route path='*' element={<p>Page does not exists.</p>} />
          </Routes>
        </Router>  
    </div>
  );
}

export default App;
