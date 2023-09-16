import './App.css';
import Navbar from './components/navbar/navbar.js';
import Main from './components/main/main.js';
import About from './components/about/about.js';
import Services from './components/services/services.js';
import Summary from './components/summary/summary.js';
import Portfolio from './components/portfolio/portfolio.js';
import Contact from './components/contact/contact.js';
import Footer from './components/footer/footer.js';

function App() {
  return (
  <>
  <Navbar />
  <Main />
  <About />
  <Services />
  <Summary />
  <Portfolio />
  <Contact />
  <Footer />
  </>
  );
}

export default App;
