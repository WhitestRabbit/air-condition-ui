import React from "react";
import { modes, intensity } from "../data";

const Menu = (props) => {
  return props.isOn ? (
    <section>
      <hr />
      <div className="temperature">
        <p>Temperature</p>
        <div>{props.temperature}</div>
        <br />
        <button name="+1" onClick={props.temperatureHandler}>
          +
        </button>{" "}
        <button name="-1" onClick={props.temperatureHandler}>
          -
        </button>
      </div>
      <br />
      <div className="mode">
        <button name="mode" onClick={props.counterHandler}>
          Mode
        </button>
        <p>{modes[props.mode]}</p>
      </div>

      <div className="intensity">
        <button name="intensity" onClick={props.counterHandler}>
          Intensity
        </button>
        <p>{intensity[props.intensity]}</p>
      </div>
    </section>
  ) : null;
};

export default Menu;
