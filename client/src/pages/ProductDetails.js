import React, { useEffect, useRef, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import { ShoppingCartOutlined } from "@ant-design/icons";

import "../styles/Product/Product.css";

export default function ProductDetails() {
  const [count, setCount] = useState(1);
  const sizes = useRef();
  const gradients = useRef();
  const products = useRef();
  const colors = useRef();

  const changeSize = (e) => {
    for (const val of sizes.current.children) {
      val.classList.remove("active");
    }
    e.target.classList.add("active");
  };

  const changeColor = (e) => {
    let primary = e.target.getAttribute("primary");
    let color = e.target.getAttribute("color");
    let product = document.querySelector(`.product[color="${color}"]`);
    let gradient = document.querySelector(`.gradient[color="${color}"]`);
    let prevGradient = document.querySelector(
      `.gradient[color="${prevColor}"]`
    );
    console.log(colors.current.children);
    for (const val of colors.current.children) {
      val.classList.remove("active");
    }
    e.target.classList.add("active");
    document.documentElement.style.setProperty("--primary", primary);
    for (const val of gradients.current.children) {
      val.classList.remove("first", "second");
    }
    for (const val of products.current.children) {
      val.classList.remove("show");
    }
    product.classList.add("show");
    // gradients.forEach((g) => g.classList.remove("first", "second"));
    gradient.classList.add("first");
    prevGradient.classList.add("second");
    prevColor = color;
  };

  let prevColor = "blue";

  const increment = () => {
    if (count >= 20) {
      setCount(20);
    } else {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (count <= 1) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  };
  const child = ["Home", `products`, "id"];
  return (
    <div className="container">
      <BreadCrumb children={child} />
      <div className="productCard">
        <div className="productBackground">
          <div className="gradients" ref={gradients}>
            <div className="gradient second" color="blue"></div>
            <div className="gradient" color="black"></div>
            <div className="gradient" color="red"></div>
            <div className="gradient" color="green"></div>
            <div className="gradient" color="orange"></div>
          </div>
          <h1 className="nike">Bookmarket</h1>
          <img src="img/logo.png" alt="" className="logo" />

          <div className="products" ref={products}>
            <img
              src="https://via.placeholder.com/300x400"
              alt=""
              className="product show"
              color="blue"
            />
            <img
              src="https://via.placeholder.com/300x400"
              alt=""
              className="product"
              color="black"
            />
            <img
              src="https://via.placeholder.com/300x400"
              alt=""
              className="product"
              color="red"
            />
            <img
              src="https://via.placeholder.com/300x400"
              alt=""
              className="product"
              color="green"
            />
            <img
              src="https://via.placeholder.com/300x400"
              alt=""
              className="product"
              color="orange"
            />
          </div>
        </div>
        <div className="info">
          <div className="productName">
            <div>
              <h1 className="big">Title</h1>
              <span className="new">new</span>
            </div>
            <h3 className="small">description</h3>
          </div>
          <div className="description">
            <h3 className="title">Book Info</h3>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              sint nobis fuga quaerat, veniam enim illo inventore esse quas
              nemo.
            </p>
          </div>
          <div className="color-container">
            <h3 className="title">Ranglari</h3>
            <div className="colors" ref={colors}>
              <span
                className="color active"
                onClick={(e) => changeColor(e)}
                primary="#2175f5"
                color="blue"
              ></span>
              <span
                className="color"
                onClick={(e) => changeColor(e)}
                primary="#444"
                color="black"
              ></span>
              <span
                className="color"
                onClick={(e) => changeColor(e)}
                primary="#f84848"
                color="red"
              ></span>
              <span
                className="color"
                onClick={(e) => changeColor(e)}
                primary="#29b864"
                color="green"
              ></span>
              <span
                className="color"
                onClick={(e) => changeColor(e)}
                primary="#ff5521"
                color="orange"
              ></span>
            </div>
          </div>
          <div className="size-container">
            <h3 className="title">o'lchamlar</h3>
            <div className="sizes" ref={sizes} value={sizes}>
              <span className="size" onClick={(e) => changeSize(e)}>
                17x24
              </span>
              <span className="size" onClick={(e) => changeSize(e)}>
                22x28
              </span>
              <span className="size active" onClick={(e) => changeSize(e)}>
                28x34
              </span>
            </div>
          </div>
          <div className="counter">
            <h3 className="title">Nechta</h3>
            <p className="text" style={{ color: false ? "red" : "" }}>
              Ombor: 20
            </p>
            <div className="counterAction">
              <button onClick={decrement}>-</button>
              <span>{count}</span>
              <button onClick={increment}>+</button>
            </div>
          </div>
          <div className="buy-price">
            <a href="#" className="buy">
              <ShoppingCartOutlined style={{ marginRight: "10px" }} />
              Kartangizni kiriting
            </a>
            <div className="price">
              <h1 style={{ marginBottom: "0px" }}>{count * 120}.000 so`m</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
