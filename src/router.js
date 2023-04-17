import{ BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import App from './App';
import First from './first';
import React from 'react';

function router() {
  return (
    <BrowserRouter>
      <main>
       <Routes>
          <Route path="/" element={<App />} />
          <Route path="first" element={<First />} />


       </Routes>

      </main>
    </BrowserRouter>
  )
}

export default router;