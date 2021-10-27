import React from "react";
import BreadCrumb from "../../components/BreadCrumb";
import Products from "./Products";
const child = ["Home", `products`];

export default function ProductsPage() {
  return (
    <div className="container">
      <BreadCrumb children={child} />
      <Products />
    </div>
  );
}
