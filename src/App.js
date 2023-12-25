import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Range from './components/Range';
import Diagram from './components/Diagram';
import { useState } from 'react';

function App() {

  const [priciple,setPriciple]=useState(98);
  const [totalInterest,setTotalInterest]=useState(2);

  const chartData = {
    labels: ['priciple', 'Interest'],
    datasets: [
      {
        data: [priciple,totalInterest], // Replace with your data values
        backgroundColor: ['#FF6384',  '#FFCE56'], // Customize colors as needed
      },
    ],
  };
  return (
    <div className="App">
      <Header/>
     <div className='main'>
      <Range/>
      <Diagram data={chartData}/>
     </div>
      
    </div>
  );
}

export default App;
