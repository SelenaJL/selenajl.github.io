import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TopBar } from './components/TopBar';
import ScrollToTop from './components/ScrollToTop';
import { Footer } from './components/Footer';
import { AboutMe } from './pages/AboutMe';
import { Education } from './pages/Education';
import { Work } from './pages/Work';
import { Volunteer } from './pages/Volunteer';
import { Animals } from './pages/Animals';
import { Hobbies } from './pages/Hobbies';
import { Projects } from './pages/Projects';
import './styles/main.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <TopBar />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/education" element={<Education />} />
        <Route path="/work" element={<Work />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
