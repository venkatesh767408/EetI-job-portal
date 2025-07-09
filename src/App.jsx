import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Jobspage from './pages/Jobs.jsx'
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Jobspage" element={<Jobspage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
