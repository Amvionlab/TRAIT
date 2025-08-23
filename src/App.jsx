import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Background from './components/Background';
import Home from './pages/Home';
import About from './pages/About';
import Blogs from './pages/blog';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Background />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="works" element={<div className="p-8"><h2>Works Page (Placeholder)</h2></div>} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="get-in-touch" element={<div className="p-8"><h2>Get in touch Page (Placeholder)</h2></div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;