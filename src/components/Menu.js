import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt, faPlay, faPause} from '@fortawesome/free-solid-svg-icons'
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
        <button name="mode" value={props.mode} onClick={props.modeHandler}>
        <FontAwesomeIcon icon={faSyncAlt} />
        </button>
      </div>
      <div className="intensity box">
        <p>ΕΝΤΑΣΗ</p>
        <p className="field">{intensity[props.intensity]}</p>
        <button
          name="intensity"
          value={props.intensity}
          onClick={props.intensityHandler}
        >
          <FontAwesomeIcon icon={faSyncAlt} />
        </button>
      </div>
      <div className="swing box">
        <p>ΚΙΝΗΣΗ ΠΕΡΣΙΔΩΝ</p>
        <p className="field">{props.swing ? "ΕΝΕΡΓΟ" : "ΚΛΕΙΣΤΟ"}</p>
        <button onClick={props.swingHandler}>
          <FontAwesomeIcon icon={faSyncAlt} />
        </button>
      </div>
      <div className="timer box">
        <p>ΧΡΟΝΟΜΕΤΡΟ</p>
        <p className="field">10:00</p>
        <button onClick={props.timerHandler}>{props.timerOn ? <FontAwesomeIcon icon={faPause} color="red"/> : <FontAwesomeIcon icon={faPlay} color="green"/>}</button>
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
