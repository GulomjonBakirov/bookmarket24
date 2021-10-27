import React from "react";
import { Tabs } from "antd";
import Slider from "../components/Slider2";

const { TabPane } = Tabs;

export default function TabView({ data }) {
  return (
    <Tabs defaultActiveKey="1" centered size={"large"}>
      {data &&
        data.map((d, index) => (
          <TabPane
            style={{ marginBottom: "50px" }}
            tab={d.title}
            key={index + 1}
          >
            <Slider children={d.data} />
          </TabPane>
        ))}
    </Tabs>
  );
}
