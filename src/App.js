import React from "react";
import Counternur from "./components/Counternur";

const App = () => {
  return (
    <div class="card">
      <div class="tools">
        <div class="circle">
          <span class="red box"></span>
        </div>
        <div class="circle">
          <span class="yellow box"></span>
        </div>
        <div class="circle">
          <span class="green box"></span>
        </div>
      </div>
      <div class="card__content">
        <Counternur />
      </div>
    </div>
  );
};

export default App;
