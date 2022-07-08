import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./components/adminComponents/Admin";
import NavigationBar from "./components/NavigationBar";
import About from "./pages/About";
import Account from "./pages/Account";
import Auth from "./pages/auth/Auth";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Images from "./pages/Images";
import Messages from "./pages/Messages";
import Page404 from "./pages/Page404";
import Users from "./pages/Users";

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
          <Route path="account" element={<Account />} />
          <Route path="images" element={<Images />} />
          <Route path="messages" element={<Messages />} />
          <Route path="users" element={<Users />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
