import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff, faHandsHelping } from '@fortawesome/free-solid-svg-icons'
import "./styles.css";

import Menu from "./components/Menu";

const App = () => {
  const [power, setPower] = useState(false);
  const [modeCounter, setModeCounter] = useState(0);
  const [intensityCounter, setIntensityCounter] = useState(0);
  const [temperature, setTemperature] = useState(23);
  const [swing, setSwing] = useState(false);
  const [timer] = useState(0);
  const [timerAction, setTimerAction] = useState(false);

  const handlePower = () => {
    setPower(!power);
  };

  const handleMode = () => {
    setModeCounter((modeCounter + 1) % 4);
  };

  const handleIntensity = () => {
    setIntensityCounter((intensityCounter + 1) % 4);
  };

  const handleTemperature = (e) => {
    if (
      !(
        (temperature === 30 && e.target.name === "+1") ||
        (temperature === 15 && e.target.name === "-1")
      )
    ) {
      setTemperature(temperature + parseInt(e.target.name, 10));
    }
  };

  const handleSwing = () => {
    setSwing(!swing);
  };

  const handleTimerAction = () => {
    setTimerAction(!timerAction);
  };

  return (
    <div className="App">
      <header>
        <h1>AC UI</h1>
      </header>

      <div className="power">
        <button className="powerbtn" onClick={handlePower}>
          
          <h2>{power ? <FontAwesomeIcon icon={faPowerOff} size="2x" color="red"/> : <FontAwesomeIcon icon={faPowerOff} size="2x" color="green"/>}</h2>
        </button>
      </div>

      <Menu
        isOn={power}
        mode={modeCounter}
        intensity={intensityCounter}
        temperature={temperature}
        swing={swing}
        timer={timer}
        timerOn={timerAction}
        modeHandler={handleMode}
        intensityHandler={handleIntensity}
        temperatureHandler={handleTemperature}
        swingHandler={handleSwing}
        timerHandler={handleTimerAction}
      />

      <div className="help">
        <button ><FontAwesomeIcon icon={faHandsHelping} size="2x"/>ΒΟΗΘΕΙΑ</button>
      </div>
    </div>
  );
};

export default App;
