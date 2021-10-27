import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { EyeOutlined } from "@ant-design/icons";

export default function NewsCard() {
  return (
    <div className="newInfo">
      <img className="newsImage" src="/assets/images/news.jpeg" />
      <div className="newsDescription">
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor
          Lorem Lorem ipsum dolor sit ametLorem ipsum dolor sit amet,
          consectetur adipiscing Lorem ipsum dolor Lorem Lorem ipsum dolor sit
          ametLorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum
          dolor Lorem Lorem ipsum dolor sit ametLorem ipsum dolor sit amet,
          consectetur adipiscing Lorem ipsum dolor Lorem Lorem ipsum dolor sit
          ametLorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum
          dolor Lorem Lorem ipsum dolor sit ametLorem ipsum dolor sit amet,
          consectetur adipiscing Lorem ipsum dolor Lorem Lorem ipsum dolor sit
          ametLorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum
          dolor Lorem Lorem ipsum dolor sit amet
        </p>
        <div className="infoPublished">
          <p>
            <EyeOutlined /> <span>41</span>
          </p>
          <p>{moment().startOf("hour").fromNow()}</p>
        </div>
        <div className="newsActions">
          <Link to="/new/:id">
            <Button color="primary">See More</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
