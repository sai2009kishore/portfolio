import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import NavbarComponent from './components/NavbarComponent';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/app.css';
import './assets/styles/scrollbar.css';
import ScrollToTop from './components/ScrollToTop';
import Gallery from './components/Gallery';

function App() {
  return (
    <div id="app" className="app-container">
      <ScrollToTop />
      <NavbarComponent />

      <div className="content-wrap">
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;