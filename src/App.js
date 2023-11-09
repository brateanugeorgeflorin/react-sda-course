import { AboutState, IncrementOption, OpositeButton } from './AboutState';
import { HeaderComponent } from './components/HeaderComponent';
import { Home } from './components/Home';
import { UseEffect } from './components/UseEffect';

function App() {
  
  return (
    <div className="App container">
      
        <HeaderComponent/>
        <AboutState />
        <IncrementOption />
        <OpositeButton />
        <Home />
        <UseEffect />
        
    </div>
  );
}

export default App;
