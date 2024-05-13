import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/home/LandingPage";
import About from "./pages/about/About";
import Service from "./pages/services/Service";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/services" element={<Service/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
