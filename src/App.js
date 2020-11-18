import React, { useState } from "react";
import "./styles.css";

import Menu from "./components/Menu";

const App = () => {
  const [power, setPower] = useState(false);

  const handlePower = () => {
    setPower(!power);
  };

  return (
    <div className="App">
      <header>
        <h1>AC UI</h1>
      </header>

      <div className="power">
        <button onClick={handlePower}>{power ? "OFF" : "ON"}</button>
      </div>

      <Menu isOn={power} />

      <footer>
        <h4>Copyright &#169; 2020</h4>
      </footer>
    </div>
  );
};

export default App;
