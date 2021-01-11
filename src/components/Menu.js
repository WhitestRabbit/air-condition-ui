import React from "react";
import { modes, intensity } from "../data";

const Menu = (props) => {
  return props.isOn ? (
    <section className="container">
      {/* <hr /> */}
      <div className="temperature box">
        <p>Temperature</p>
        <div className="field">{props.temperature}</div>
        <button name="+1" onClick={props.temperatureHandler}>
          +
        </button>{" "}
        <button name="-1" onClick={props.temperatureHandler}>
          -
        </button>
      </div>
      <div className="mode box">
        <p>Mode</p>
        <p className="field">{modes[props.mode]}</p>
        <button name="mode" value={props.mode} onClick={props.counterHandler}>
          Cycle
        </button>
      </div>
      <div className="intensity box">
        <p>Intensity</p>
        <p className="field">{intensity[props.intensity]}</p>
        <button
          name="intensity"
          value={props.intensity}
          onClick={props.counterHandler}
        >
          Cycle
        </button>
      </div>
      <div className="swing box">
        <p>Swing</p>
        <p className="field">{props.swing ? "ON" : "OFF"}</p>
        <button onClick={props.swingHandler}>Switch</button>
      </div>
    </section>
  ) : null;
};

export default Menu;
