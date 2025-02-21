import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Product from "./pages/product/Product.jsx";
import RootLayout from "./components/layouts/RootLayout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/products" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
