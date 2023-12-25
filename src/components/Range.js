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
        <div className='range-container'>
        <div className="ranges">
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
         <div className='min-max'>
            <span>$1000</span>
            <span>$10000</span>
         </div>
        </div>
        
        <div className="ranges">
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
          <div className='min-max'>
            <span>$0</span>
            <span>${homeValue}</span>
         </div>
         
        </div>


        <div className="ranges">
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
         <div className='min-max'>
            <span>$0</span>
            <span>${homeValue}</span>
         </div>
        </div>
        
        
        <div className="ranges">
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
          <div className='min-max'>
            <span>2%</span>
            <span>18%</span>
         </div>
         
        </div>

        <div className="ranges">
            <p>Tenure</p>
            <select>
                <option>5 years</option>
                <option>10 years</option>
                <option>15 years</option>
                <option>20 years</option>
                <option>25 years</option>
            </select>
        </div>
        
        
       
        
        </div>
      );
}

export default Range
