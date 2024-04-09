import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Gallery';
import Test from '../pages/Test';

function Pages() {
    return (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </Router>
      )
}

export default Pages;