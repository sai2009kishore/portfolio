import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Projects from './components/Projects';
import NavbarComponent from './components/NavbarComponent';
import { getContext } from './assets/js/utils';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/App.css';
import './assets/styles/scrollbar.css';

function App() {
  const context = getContext();

  return (
    <div id="app">
      <NavbarComponent />

      <Routes>
        <Route path={`${context}home`} element={<Home />} />
        <Route path={`${context}about`} element={<About />} />
        <Route path={`${context}resume`} element={<Resume />} />
        <Route path={`${context}projects`} element={<Projects />} />
        <Route path={`${context}interests`} element={<Interests />} />
        <Route path={`${context}contact`} element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;