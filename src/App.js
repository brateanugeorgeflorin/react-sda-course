import { AboutState, IncrementOption, OpositeButton } from './AboutState';
import { HeaderComponent } from './components/HeaderComponent';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { UseEffect } from './components/UseEffect';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const animale = [
    { name : 'Pisica', age : 3, id : 1, friendly : true },
    { name : 'Catel', age : 3, id : 2, friendly : true },
    { name : 'Leu', age : 5, id : 3, friendly : false }
  ]

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
            <Route path='/headercomponent' element={<HeaderComponent arr={animale} />} />
            <Route path='*' element={<div className='container'><p className='pt-4'>Page does not exists.</p></div>} />
          </Routes>
        </Router>  
    </div>
  );
}

export default App;
