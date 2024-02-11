import React from "react";
import "./date.scss";
import Ready from "./ready.gif";
import GettingReady from "./getting-ready.png";
import Chat from "./chat.png";
import { Button } from "@mui/base";
import { useNavigate } from "react-router-dom";

const Date = () => {
  let navigate = useNavigate();
  return (
    <div className="date">
      <div className="neel-board">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img src={Chat} id="img3" />
          <div className="text-overlay">Zip toh band kar lo uncle</div>

          <img id="img1" src={Ready} />
        </div>

        <img id="img2" src={GettingReady} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "100px",
            marginRight: "200px",
          }}
        >
          <Button
            className="button"
            onClick={() => {
              alert("Haha Not an Option");
            }}
          >
            Close your zip
          </Button>
          <Button
            className="button"
            onClick={() => {
              navigate("/final");
            }}
          >
            Defy all norms
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Date;
