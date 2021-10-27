import React, { useEffect, useState } from "react";
import MenuList from "./menu";
import { Menu, Dropdown, Button, message, Space, Tooltip, Badge } from "antd";

import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  HeartFilled,
  HeartOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
  ShoppingFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import ProductsFilter from "../../components/ProductsFilter";
import "../../styles/Product/Products.css";
import CardItem from "./CardItem";
const { Meta } = Card;

const GalleryReact = () => {
  const [items, setItems] = useState(MenuList);
  const [itemText, setItemText] = useState("Hammasi");
  const [isLike, setIsLike] = useState(false);
  function handleMenuClick(e) {
    var itemLen = e.domEvent.nativeEvent.path.length;
    message.loading(
      `${
        itemLen === 10
          ? e.domEvent.nativeEvent.path[1].innerText
          : e.domEvent.nativeEvent.path[0].innerText
      }
    `,
      0.5
    );
    var categoryName =
      itemLen === 10
        ? e.domEvent.nativeEvent.path[1].innerText
        : e.domEvent.nativeEvent.path[0].innerText;

    categoryName = categoryName.toLowerCase();
    if (categoryName === "hammasi") {
      setItems(MenuList);
    } else {
      const updatedItems = MenuList.filter((curElem) => {
        return curElem.category === categoryName;
      });
      setItems(updatedItems);
    }

    setItemText(
      itemLen === 10
        ? e.domEvent.nativeEvent.path[1].innerText
        : e.domEvent.nativeEvent.path[0].innerText
    );
  }

  const child = [
    "Hammasi",
    "Ilmiy Adabiyotlar",
    "Chet el Adabiyotlar",
    "Adabiy Kitoblar",
    "Fantastik Asarlar",
  ];
  const menu = (
    <Menu onClick={handleMenuClick}>
      {child.map((item, index) => (
        <Menu.Item key={index + 1}>{item}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <>
      <h1>Mahsulotlarimiz</h1>
      <hr />

      <div style={{ marginTop: "15px" }}>
        <Space wrap>
          <Dropdown.Button overlay={menu}>{itemText}</Dropdown.Button>
        </Space>
      </div>

      <div>
        <div>
          <div>
            <div className="products_list">
              {items.map((elem) => (
                <CardItem product={elem} />
                //   <div>
                //     <div>
                //       {/* for images */}
                //       <div>
                //         <img src={image} alt={name} width="100" height="100" />
                //       </div>

                //       {/* menu items description */}
                //       <div>
                //         <div>
                //           <h1>{name}</h1>
                //           <p>{description}</p>
                //         </div>
                //         <div>
                //           <div>
                //             <h2>Price : {price}</h2>
                //             <a href="#">
                //               <button>Order Now</button>
                //             </a>
                //           </div>
                //           <p>*Prices may vary on selected date.</p>
                //         </div>
                //       </div>
                //     </div>
                //   </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryReact;
