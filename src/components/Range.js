import React from 'react'
import { useState } from 'react';

const Range = () => {
    const [homeValue, setHomeValue] = useState(50);
    const [downPayment,setDowmPayment]=useState(0);
    const [loanAmount,setLoanAmount]=useState(0);
    const [interest,setInterest]=useState(2);

  const handleHomeChange = (event) => {
    setHomeValue(event.target.value);
  };
    return (
        <div>
            <p>Home Value</p>
          <h1> $ {homeValue}</h1>
          {/* <label htmlFor="rangeInput">Select a value:</label> */}
          <input
            type="range"
            id="rangeInput"
            name="rangeInput"
            min="1000"
            max="10000"
            value={homeValue}
            onChange={handleHomeChange}
          />
          {/* <p>Selected value: {rangeValue}</p> */}
        </div>
      );
}

export default Range
