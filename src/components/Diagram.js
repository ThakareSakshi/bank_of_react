import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import React from 'react'




const Diagram = ({data}) => {
    ChartJS.register(ArcElement, Tooltip, Legend);


  return (
    <div className="diagram">
        <h1>Monthly Payment:$ 35.45</h1>
     <div className="chart-container">
     <Pie data={data} />
     </div>
    </div>
  )
}

export default Diagram
