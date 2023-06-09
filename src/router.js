import{ BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import App from './App';
import First from './first';
import React from 'react';
import Home from './home';
import Resources from './resources';

function router() {
  return (
    <BrowserRouter>
      <main>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<App />} />
          <Route path="first" element={<First />} />
          <Route path="resources" element={<Resources />} />



       </Routes>

      </main>
    </BrowserRouter>
  )
}

export default router;