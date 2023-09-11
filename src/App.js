import './App.css';
import Navbar from './components/navbar/navbar.js';
import Main from './components/main/main.js';
import About from './components/about/about.js';
import Services from './components/services/services.js';
import Summary from './components/summary/summary.js';

function App() {
  return (
  <>
  <Navbar />
  <Main />
  <About />
  <Services />
  <Summary />
  </>
  );
}

export default App;
