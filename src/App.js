import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Headroom from 'react-headroom';

import Nav from './components/Nav';
import Home from './components/Home/Home';
import Events from './components/Events/Events';
import Community from './components/Community/Community';
import Contact from './components/Contact';
import Footer from './components/Footer';

function AppContent() {
  const location = useLocation();

  return (
    <>
      <Headroom>
        <Nav />
      </Headroom>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
