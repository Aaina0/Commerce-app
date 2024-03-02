import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductProvider } from "./context/ProductContext";
import SidebarProvider from "./context/SidebarContext";
import CartProvider from "./context/CartContext";  // Import the CartProvider

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <SidebarProvider>
    <CartProvider>  {/* Wrap the components that need CartContext with CartProvider */}
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
);
