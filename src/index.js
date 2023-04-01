import React from "react";
import ReactDom from "react-dom";

const name = "Saloni";
const luckyNumber = 14;

ReactDom.render(
  <div>
    <h1>Hello {name}!</h1>
    <p>My lucky number is {luckyNumber}.</p> 
</div>,
 document.getElementById("root"));