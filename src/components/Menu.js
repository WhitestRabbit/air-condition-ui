import React from "react";

const Menu = (props) => {
  return (
    <section>
      <hr />
      <div className="mode">
        <button>Mode</button>
      </div>

      <div className="temperature">
        <button>Temperature</button>
      </div>

      <div className="intensity">
        <button>Intensity</button>
      </div>
    </section>
  );
};

export default Menu;
