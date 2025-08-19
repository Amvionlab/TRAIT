import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Background from './components/Background';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* The main route uses the Background component as a layout wrapper. */}
        <Route path="/" element={<Background />}>
          {/* The Home page is set as the index (default) page for the layout. */}
          <Route index element={<Home />} />
          {/* Other pages are nested as children of the main layout route. */}
          <Route path="about" element={<About />} />
          {/* You can add more routes for other pages like "works" and "blogs" here */}
          <Route path="works" element={<div className="p-8"><h2>Works Page (Placeholder)</h2></div>} />
          <Route path="blogs" element={<div className="p-8"><h2>Blogs Page (Placeholder)</h2></div>} />
          <Route path="get-in-touch" element={<div className="p-8"><h2>Get in touch Page (Placeholder)</h2></div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;