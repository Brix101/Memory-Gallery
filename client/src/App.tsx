import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./components/adminComponents/Admin";
import NavigationBar from "./components/NavBar/NavigationBar";
import About from "./pages/About";
import Auth from "./pages/auth/Auth";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavigationBar />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="login" element={<Auth />} />
        <Route path="admin" element={<Admin />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
