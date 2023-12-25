import React from 'react'
import { useState } from 'react';

const Range = () => {
    const [homeValue, setHomeValue] = useState(3000);
    const [downPayment,setDowmPayment]=useState(1000);
    const [loanAmount,setLoanAmount]=useState(2000);
    const [interest,setInterest]=useState(2);

  const handleHomeChange = (event) => {
    setHomeValue(event.target.value);
  };

  const handlePaymentChange = (event) => {
    setDowmPayment(event.target.value);
    setLoanAmount(homeValue-event.target.value)
  };

  const handleLoanChange = (event) => {
    setDowmPayment(homeValue-event.target.value);
    setLoanAmount(event.target.value)
  };

  const handleInterestChange = (event) => {
    setInterest(event.target.value)
  };
    return (
        <>
        <div>
            <p>Home Value</p>
          <h1> $ {homeValue}</h1>
         
          <input
            type="range"
            id="homeinput"
            name="homeInput"
            min="1000"
            max="10000"
            value={homeValue}
            onChange={handleHomeChange}
          />
         
        </div>
        
        <div>
            <p>Down Payment</p>
          <h1> $ {downPayment}</h1>
         
          <input
            type="range"
            id="paymentInput"
            name="paymentInput"
            min="0"
            max={homeValue}
            value={downPayment}
            onChange={handlePaymentChange}
          />
         
        </div>
        <div>
            <p>Laon Amount</p>
          <h1> $ {loanAmount}</h1>
         
          <input
            type="range"
            id="loanInput"
            name="loanInput"
            min="0"
            max={homeValue}
            value={loanAmount}
            onChange={handleLoanChange}
          />
         
        </div>
        
        
        <div>
            <p>Interest Rate</p>
          <h1> {interest} %</h1>
         
          <input
            type="range"
            id="interestInput"
            name="interestInput"
            min="2"
            max="18"
            value={interest}
            onChange={handleInterestChange}
          />
         
        </div>
        
        
       
        
        </>
      );
}

export default Range
