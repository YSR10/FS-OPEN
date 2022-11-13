import React from "react";

const Button = ({ option, text, setOption }) => (
  <button onClick={() => setOption(option + 1)}> {text} </button>
);

export default Button;
