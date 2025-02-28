import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Product from "./pages/product/Product.jsx";
import RootLayout from "./components/layouts/RootLayout.jsx";
import { store } from "./app/store";
import { Provider } from "react-redux";
import ProductDetails from "./pages/product/ProductDetails.jsx";
import SignUp from "./pages/auth/SignUp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<App />} />
            <Route path="/products" element={<Product />} />
            <Route path="/products/:id" element={<ProductDetails />} />
          </Route>
          <Route path="/register" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
