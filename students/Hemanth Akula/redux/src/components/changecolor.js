import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changecolor } from "../features/theme";

function changecolor() {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setColor(event.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(changecolor(color));
        }}
      >
        CHANGE COLOR
      </button>
    </div>
  );
}

export default changecolor;