import React from "react";
import { modes, intensity } from "../data";

const Menu = (props) => {
  return props.isOn ? (
    <section className="container">
      <div className="temperature box">
        <p>ΘΕΡΜΟΚΡΑΣΙΑ</p>
        <div className="field">{props.temperature}°C</div>
        <button name="+1" onClick={props.temperatureHandler}>
          +
        </button>{" "}
        <button name="-1" onClick={props.temperatureHandler}>
          -
        </button>
      </div>
      <div className="mode box">
        <p>ΛΕΙΤΟΥΡΓΙΑ</p>
        <p className="field">{modes[props.mode]}</p>
        <button name="mode" value={props.mode} onClick={props.counterHandler}>
          Αλλαγή
        </button>
      </div>
      <div className="intensity box">
        <p>ΕΝΤΑΣΗ</p>
        <p className="field">{intensity[props.intensity]}</p>
        <button
          name="intensity"
          value={props.intensity}
          onClick={props.counterHandler}
        >
          Αλλαγή
        </button>
      </div>
      <div className="swing box">
        <p>ΚΙΝΗΣΗ ΠΕΡΣΙΔΩΝ</p>
        <p className="field">{props.swing ? "ON" : "OFF"}</p>
        <button onClick={props.swingHandler}>Αλλαγή</button>
      </div>
      <div className="timer box">
        <p>ΧΡΟΝΟΜΕΤΡΟ</p>
        <p className="field">10:00</p>
        <button onClick={props.timerHandler}>{props.timerOn ? "Παύση" : "Εκκίνηση"}</button>
        <br/>
        <button name="+10">
          +
        </button>{" "}
        <button name="-10" >
          -
        </button>
      </div>
    </section>
  ) : null;
};

export default Menu;
