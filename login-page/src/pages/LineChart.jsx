import React, { useRef } from 'react';
import { Line } from 'react-chartjs-2';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Legend,
  } from "chart.js";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Legend
  );

const LineChart = () => {
  const chartRef = useRef(null);

  

  const data = {
    labels: ['C1', 'C2', 'C3', 'C4', 'C5', 'C6'],
    datasets: [
      {
        label: 'Data 1',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        fill: false,
        data: [12, 14, 3, 5, 6, 10],
      },
      {
        label: 'Data 2',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        fill: false,
        data: [5, 6, 4, 8, 3, 7],
      },
      {
        label: 'Data 2',
        borderColor: 'rgb(0, 128, 0)',
        borderWidth: 1,
        fill: false,
        data: [15, 13, 10, 15, 12, 7],
      },
    ],
  };

  const printPDF = () => {

    const pdf = new jsPDF('p', 'mm', 'a4');   
    html2canvas(chartRef.current).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      pdf.addImage(imgData, 'PNG', 10, 10, 190, 100);
      pdf.save('line_comparison_graph.pdf');
    });
  };

  return (
    <div>
      <div>
        <button onClick={printPDF} style={{width:"30%",height:"30px",backgroundColor:"black",color:"white"}}>Print as PDF</button>
      </div>
      <div ref={chartRef}>
        <Line data={data} />
      </div>
    </div>
  );
};

export default LineChart;
