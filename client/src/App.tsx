import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./layout/Admin";
import Main from "./layout/Main";
import About from "./pages/About";
import Account from "./pages/admin/Account";
import Dashboard from "./pages/admin/Dashboard";
import Images from "./pages/admin/Images";
import Users from "./pages/admin/Users";
import Auth from "./pages/Auth";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="login" element={<Auth />} />
        <Route path="admin" element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path="account" element={<Account />} />
          <Route path="images" element={<Images />} />
          <Route path="users" element={<Users />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
