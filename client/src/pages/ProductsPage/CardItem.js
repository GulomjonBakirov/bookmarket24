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
const { Meta } = Card;

export default function CardItem({ product }) {
  const {
    id,
    description,
    name,
    image,
    imageFluid,
    discount,
    price,
    condition,
  } = product;

  const [isLike, setIsLike] = useState(false);
  const [imgSrc, setImgSrc] = useState(image);

  const handleMouseOver = () => {
    setImgSrc(imageFluid);
  };

  const handleMouseOut = () => {
    setImgSrc(image);
  };

  return (
    <div key={id} className="products_card">
      {condition && discount ? (
        <Badge.Ribbon text={`-${discount}`} color="red">
          <Card
            // style={{ width: 300 }}
            cover={
              <img
                alt="Product Info"
                src={imgSrc}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                // onMouseOut={(e) =>
                //   // (e.currentTarget.src = { image })
                //   console.log(e.currentTarget.src)
                // }
              />
            }
            actions={[
              <ShoppingCartOutlined />,

              isLike ? (
                <HeartOutlined onClick={() => setIsLike(!isLike)} />
              ) : (
                <HeartFilled
                  onClick={() => setIsLike(!isLike)}
                  style={{ color: "red" }}
                />
              ),
              <Link to="/product/:id">
                <EllipsisOutlined key="ellipsis" />
              </Link>,
            ]}
          >
            <Meta
              //   avatar={
              //     <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              //   }
              title={name}
              description={
                <div>
                  <span>Narhi: {price} so`m</span>
                  <p>Description: {description}</p>
                </div>
              }
            />
          </Card>
        </Badge.Ribbon>
      ) : condition === "yangi" ? (
        <Badge.Ribbon text={condition.toUpperCase()} color="green">
          <Card
            // style={{ width: 300 }}
            cover={
              <img
                alt="Product Info"
                src={imgSrc}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              />
            }
            actions={[
              <ShoppingCartOutlined />,
              isLike ? (
                <HeartOutlined onClick={() => setIsLike(!isLike)} />
              ) : (
                <HeartFilled
                  onClick={() => setIsLike(!isLike)}
                  style={{ color: "red" }}
                />
              ),
              <Link to="/product/:id">
                <EllipsisOutlined key="ellipsis" />
              </Link>,
            ]}
          >
            <Meta
              //   avatar={
              //     <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              //   }
              title={name}
              description={
                <div>
                  <span>Narhi: {price} so`m</span>
                  <p>Description: {description}</p>
                </div>
              }
            />
          </Card>
        </Badge.Ribbon>
      ) : (
        <Card
          // style={{ width: 300 }}
          cover={
            <img
              alt="Product Info"
              src={imgSrc}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
          }
          actions={[
            <ShoppingCartOutlined />,
            isLike ? (
              <HeartOutlined onClick={() => setIsLike(!isLike)} />
            ) : (
              <HeartFilled
                onClick={() => setIsLike(!isLike)}
                style={{ color: "red" }}
              />
            ),
            <Link to="/product/:id">
              <EllipsisOutlined key="ellipsis" />
            </Link>,
          ]}
        >
          <Meta
            // avatar={
            //   <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            // }
            title={name}
            description={
              <div>
                <span>Narhi: {price} so`m</span>
                <p>Description: {description}</p>
              </div>
            }
          />
        </Card>
      )}
    </div>
  );
}
