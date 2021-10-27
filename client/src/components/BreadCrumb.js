import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

export default function BreadCrumb({ children }) {
  return (
    <Breadcrumb style={{ margin: "20px" }}>
      {children &&
        children.map((e, index) => (
          <Breadcrumb.Item key={index}>
            <Link to={`/${e.toLowerCase() === "home" ? "" : e.toLowerCase()}`}>
              {e}
            </Link>
          </Breadcrumb.Item>
        ))}
    </Breadcrumb>
  );
}
