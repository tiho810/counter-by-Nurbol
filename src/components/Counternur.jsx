import React, { useState } from "react";

const Counternur = () => {
  const [nums, setNums] = useState(0);
  const Plus = () => {
    setNums(nums + 1);
  };

  const Minus = () => {
    setNums(nums - 1);
  };

  const Reset = () => {
    setNums(0);
  };

  return (
    <>
      <div>Numbers:{nums}</div>
      <button id="btnNums" onClick={Plus}>
        +
      </button>
      <button id="btnNums" onClick={Minus}>
        -
      </button>
      <button id="btnNums" onClick={Reset}>
        Reset
      </button>
    </>
  );
};

export default Counternur;
