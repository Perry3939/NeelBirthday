import React, { useState } from "react";
import "./intro.scss";
import Cutie from "./cutie.gif";
import Cry from "./cry.gif";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Intro = () => {
  let navigate = useNavigate();

  const [cry, setCry] = useState(false);
  const [sorry, setSorry] = useState(false);
  const ICry = () => {
    if (!sorry) setCry(true);
    else {
      navigate("/datenight");
    }
  };

  const ChangeSorry = () => {
    setSorry(true);
  };
  return (
    <div className="intro">
      <div>
        <div className="neel-board">
          <h1>Hey Neel!</h1>
          <p>Come on a Date with me?</p>
          <Button className="button" onClick={ICry}>
            {!cry
              ? "No"
              : !sorry
              ? "How could you say no?"
              : "Submit your answer"}
          </Button>
          {cry && (
            <input
              type="text"
              value={!sorry ? "" : "I am So So Sorry"}
              onChange={ChangeSorry}
            />
          )}
        </div>
        <img src={!cry ? Cutie : Cry} />
      </div>
    </div>
  );
};

export default Intro;
