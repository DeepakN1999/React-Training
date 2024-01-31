import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<NavBar />}>
            <Route path="/" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Contact" element={<Contact />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
