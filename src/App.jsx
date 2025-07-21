import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hosi from './component/content/Hosi.jsx'
import Dummy from './component/content/Dummy.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Hosi />} />
        <Route path="/" element={<Hosi />} />
        <Route path="/dummy" element={<Dummy />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
