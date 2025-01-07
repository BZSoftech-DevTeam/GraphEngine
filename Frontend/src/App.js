import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import HeroContainer from "./Pages/Home/HeroContainer";
import Footer from "./Components/Footer";
import Login from "./Components/Authentication/Login";
import SignUp from "./Components/Authentication/SignUp";
import DemoContainer from "./Pages/Demo/DemoContainer";

import ClientProtectedRoute from "./Pages/Clients/ProtectedRoute";
import ClientLayout from "./Pages/Clients/Layout";
import Dashboard from "./Pages/Clients/pages/Dashboard";
import FileUpload from "./Pages/Clients/pages/FileUpload";
import AboutContainer from "./Pages/About/AboutContainer";
import ContactUs from "./Pages/Contact/ContactUs";
import Pricing from "./Pages/Pricing/Pricing";
import CheckoutPage from "./Pages/Pricing/CheckoutPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<HeroContainer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/demo" element={<DemoContainer />} />
          <Route path="/about" element={<AboutContainer />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/checkout" element={<CheckoutPage />} />

          <Route path="/dashboard" element={<ClientProtectedRoute Component={ClientLayout} />} >
            <Route index element={<Dashboard />} />
            <Route path="ac" element={<FileUpload />} />
          </Route>
          
        </Routes>

        <Footer></Footer>
      </BrowserRouter >
    </>
  );
}

export default App;
