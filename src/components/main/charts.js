// import { React, Component, useState } from "react"
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
//   } from 'chart.js';
// import { Bar, Line } from 'react-chartjs-2';
// import './charts.css'

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     LineElement,
//     PointElement,
//     Title,
//     Tooltip,
//     Legend
//   );


// const Charts = () => {
//     const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
//     const data = {
//         labels,
//         datasets: [{
//             label: "Data",
//             data: [5, 11, 3, 8, 7, 4, 15],
//             borderColor: 'rgb(255, 99, 132)',
//             backgroundColor: 'rgb(255, 99, 132)'
//         }
//         ],
//       };
//     const [chartOption, setChartOption] = useState(false);
//     const change = () => {
//         if(chartOption === false)
//             setChartOption(true);
//         else
//             setChartOption(false);
//         console.log(chartOption);
//     }
//     return (
//         <>
//             <label className="toggleOption">
//                 <input type="checkbox" className="checkbox" onClick={change}></input>
//                 <span className="slider"></span>
//             </label>
//             <div className={chartOption ? "charts barchart" : "charts"}>
//                 <Bar data={data} />
//             </div>
//             <div className={chartOption ? "charts" : "charts linechart"}>
//                 <Line data={data} />
//             </div>
//         </>
//     )
// }

// export default Charts;