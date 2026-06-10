import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import Register from "../pages/Register";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ThankYou from "../pages/ThankYou";
import Privacy from "../pages/Privacy";
import Terms from "../pages/Terms";
import Layout from "../Layout/Layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate replace to="/home" />} />
        <Route path="home" element={<Home />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="register" element={<Register />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="thank-you" element={<ThankYou />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="*" element={<Navigate replace to="/home" />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
