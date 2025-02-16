import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ReconHubPage from "./pages/ReconHubPage";
import PaytestHubPage from "./pages/PaytestHubPage.tsx";
import DoablyPage from "./pages/DoablyPage.tsx";
import FocalPointPage from "./pages/FocalPointPage.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reconhub" element={<ReconHubPage />} />
        <Route path="/paytesthub" element={<PaytestHubPage />} />
        <Route path="/doably" element={<DoablyPage />} />
        <Route path="/focal-point" element={<FocalPointPage />} />
      </Routes>
    </Router>
  );
}

export default App;
