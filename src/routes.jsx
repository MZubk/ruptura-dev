import { BrowserRouter, Route, Routes } from "react-router-dom";

//components
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import DefaultPage from "./components/DefaultPage";
import ScrollToTop from "./components/ScrollToTop";

//pages
import About from "./pages/About";
import Home from "./pages/Home";
import Post from "./pages/Post";
import NotFound from "./pages/NotFound";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path="sobre" element={<About />} />
        </Route>
        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
