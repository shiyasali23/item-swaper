import React, { useState } from "react";
import "./App1.css";

const App = () => {
  const [box1Array, setBox1Array] = useState([
    "item-1",
    "item-2",
    "item-3",
    "item-4",
    "item-5"
  ]);
  const [box2Array, setBox2Array] = useState([]);

  const rightClick = () => {
    const checkedCheckboxes = document.querySelectorAll(".box-1 .input-boxes:checked");
    const checkedValues = Array.from(checkedCheckboxes).map((checkbox) => checkbox.nextSibling.textContent);
  
    setBox1Array((prevBox1Array) => prevBox1Array.filter((item) => !checkedValues.includes(item)));
    setBox2Array((prevBox2Array) => [...prevBox2Array, ...checkedValues]);
  
    // Reset checked state of checkboxes in "box-1"
    checkedCheckboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  };
  
  const leftClick = () => {
    const checkedCheckboxes = document.querySelectorAll(".box-2 .input-boxes:checked");
    const checkedValues = Array.from(checkedCheckboxes).map((checkbox) => checkbox.nextSibling.textContent);
  
    setBox2Array((prevBox2Array) => prevBox2Array.filter((item) => !checkedValues.includes(item)));
    setBox1Array((prevBox1Array) => [...prevBox1Array, ...checkedValues]);
  
    // Reset checked state of checkboxes in "box-2"
    checkedCheckboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  };
  
  

  console.log(box2Array);
  console.log(box1Array);
  return (
    <div className="item-swaper">
      <div className="box-1">
        {box1Array.map((item, index) => (
          <div key={index} id={index}>
            <input type="checkbox" id={item} className="input-boxes" />
            {item}
          </div>
        ))}
      </div>

      <div className="button">
        <button className="to-right" onClick={rightClick}>
          →
        </button>
        <button className="to-left" onClick={leftClick}>
          ←
        </button>
      </div>

      <div className="box-2">
        {box2Array.map((item, index) => (
          <div key={index} id={index}>
            <input type="checkbox" id={item} className="input-boxes" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
