import { Menu, Dropdown, Button, message, Space, Tooltip } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { useState } from "react";

const DropDown = ({ child }) => {
  const [itemText, setItemText] = useState("All");
  function handleButtonClick(e) {
    message.info("Click on left button.");
    console.log("click left button", e);
  }

  function handleMenuClick(e) {
    var itemLen = e.domEvent.nativeEvent.path.length;
    message.success(
      `Click on     ${
        itemLen === 10
          ? e.domEvent.nativeEvent.path[1].innerText
          : e.domEvent.nativeEvent.path[0].innerText
      }
    `
    );
    console.log();
    setItemText(
      itemLen === 10
        ? e.domEvent.nativeEvent.path[1].innerText
        : e.domEvent.nativeEvent.path[0].innerText
    );
  }
  const menu = (
    <Menu onClick={handleMenuClick}>
      {child.map((item, index) => (
        <Menu.Item key={index + 1}>{item}</Menu.Item>
      ))}
    </Menu>
  );
  return (
    <Space wrap>
      <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
        {itemText}
      </Dropdown.Button>
    </Space>
  );
};

export default DropDown;
