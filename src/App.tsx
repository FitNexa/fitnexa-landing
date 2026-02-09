import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import GrowthPlaybook from './pages/GrowthPlaybook';
import WallOfFame from './pages/WallOfFame';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/playbook/:gymId" element={<GrowthPlaybook />} />
          <Route path="/playbook" element={<GrowthPlaybook />} />
          <Route path="/wall-of-fame" element={<WallOfFame />} />
          {/* Fallback to home for demo purposes */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
