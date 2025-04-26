import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Projects from './components/Projects';
import NavbarComponent from './components/NavbarComponent';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/App.css';
import './assets/styles/scrollbar.css';

function App() {
  return (
    <div id="app">
      <NavbarComponent />

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/interests' element={<Interests />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;