import React, { useState } from "react";
import "./styles.css";

import Menu from "./components/Menu";

const App = () => {
  const [power, setPower] = useState(false);
  const [modeCounter, setModeCounter] = useState(0);
  const [intensityCounter, setIntensityCounter] = useState(0);
  const [temperature, setTemperature] = useState(23);

  const handlePower = () => {
    setPower(!power);
  };

  const handleCounter = (e) => {
    e.target.name === "mode"
      ? setModeCounter((modeCounter + 1) % 4)
      : setIntensityCounter((intensityCounter + 1) % 4);
  };

  const handleTemperature = (e) => {
    setTemperature(temperature + parseInt(e.target.name, 10));
  };

  return (
    <div className="App">
      <header>
        <h1>AC UI</h1>
      </header>

      <div className="power">
        <button onClick={handlePower}>{power ? "OFF" : "ON"}</button>
      </div>

      <Menu
        isOn={power}
        mode={modeCounter}
        intensity={intensityCounter}
        temperature={temperature}
        counterHandler={handleCounter}
        temperatureHandler={handleTemperature}
      />

      <footer>
        <h4>Copyright &#169; 2020</h4>
      </footer>
    </div>
  );
};

export default App;
