import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";

function App() {
  return (
  <Router>
     <div>

      <Navbar>
        <Routes>
          <Route path="/" element={< home page />} />
          <Route path="/about" element={< about page />} />
          <Route path="/contact" element={< contact us />} />
          <Route path="/causes" element={< causes />} />
          <Route path="/gallery" element={< causes />} />
        </Routes>
      </Navbar>
      
      {/* Footer or other layout elements */}
     </div>
  </Router>
  );
}

export default App;
