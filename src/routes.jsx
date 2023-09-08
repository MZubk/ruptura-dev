import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import About from "./pages/about";
import Home from "./pages/home";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="*" element={<div>Pagina não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}
