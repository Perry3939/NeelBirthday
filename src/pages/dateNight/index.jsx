import React, { useState } from "react";
import "./dateNight.scss";
import Neel from "./haroo-cookie.png";
// import Cutie from "./cutie.gif";
// import Cry from "./cry.gif";
// import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const DateNight = () => {
  let navigate = useNavigate();
  const [position1, setPosition1] = useState({ left: 0, top: 0 });
  const [position2, setPosition2] = useState({ left: 0, top: 0 });
  const [position3, setPosition3] = useState({ left: 0, top: 0 });

  const [top, setTop] = useState(false);

  const changePosition = (i) => {
    console.log("pos", position3);

    const predefinedPositions = [
      { left: 200, top: 200 },
      { left: -200, top: -200 },
      { left: -200, top: 200 },
      // Add more positions as needed
    ];
    const randomIndex = Math.floor(Math.random() * predefinedPositions.length);

    if (i === 1)
      setPosition1({
        left: position1["left"] + predefinedPositions[randomIndex]["left"],
        top: position1["top"] + predefinedPositions[randomIndex]["top"],
      });
    else if (i === 2)
      setPosition2({
        left: position2["left"] + predefinedPositions[randomIndex]["left"],
        top: position2["top"] + predefinedPositions[randomIndex]["top"],
      });
    else
      setPosition3({
        left: position3["left"] + predefinedPositions[randomIndex]["left"],
        top: position3["top"] + predefinedPositions[randomIndex]["top"],
      });
  };

  const topSelected = () => {
    setTop(true);
    setPosition1({ left: 0, top: 0 });
    setPosition2({ left: 0, top: 0 });
  };

  return (
    <div className="dateNight">
      <div className="neel-board">
        <h1>{`Okay Great! Let's Get Ready For Our Date Night`}</h1>
        <div className="outer-div">
          <div className="neel">
            <img src={Neel} />
          </div>
          <div className="attire">
            <h1>{!top ? "Select Surprise Top" : "Select Surprise Bottoms"}</h1>
            <div
              className="box"
              id="box1"
              style={{
                left: `${position1.left}px`,
                top: `${position1.top}px`,
                position: "relative",
              }}
              onMouseOver={() => (!top ? changePosition(1) : {})}
              onClick={
                top
                  ? () => {
                      navigate("/date");
                    }
                  : () => {}
              }
            >
              1
            </div>
            <div
              className="box"
              style={{
                left: `${position2.left}px`,
                top: `${position2.top}px`,
                position: "relative",
              }}
              id="box2"
              onMouseOver={() => changePosition(2)}
            >
              2
            </div>
            <div
              className="box"
              id="box3"
              style={{
                left: `${position3.left}px`,
                top: `${position3.top}px`,
                position: "relative",
              }}
              onClick={!top ? topSelected : () => {}}
              onMouseOver={() => (top ? changePosition(3) : {})}
            >
              3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateNight;
