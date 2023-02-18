
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home"
import Product from "./Pages/Product";
import about from "./Pages/about";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<about/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
