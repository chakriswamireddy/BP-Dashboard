import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";

// Register Chart.js modules
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function Chart({ patient }) {

    const datasets = patient?.diagnosis_history;
    console.log( typeof datasets)

    const data = {
        labels: patient?.diagnosis_history?.map((item) => item.month + " " + item.year),
        datasets: [
            {
                label: "Systolic",
                data: patient?.diagnosis_history?.map((item) => item.blood_pressure.systolic.value),
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(275,192,192,1)",
                borderWidth: 2,
                tension: 0.4,
            },

            {
                label: "Diastolic",
                data: patient?.diagnosis_history?.map((item) => item.blood_pressure.diastolic.value),
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)",
                borderWidth: 2,
                tension: 0.4,
            }
        ],

        // datasets: [
        //   {
        //     label: "Sales 2024 (in USD)",
        //     data: [3000, 4000, 3200, 5000, 4600, 5400],
        //     backgroundColor: "rgba(75,192,192,0.2)",
        //     borderColor: "rgba(75,192,192,1)",
        //     borderWidth: 2,
        //   },
        // ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Blood Pressure",
                
            },
            scales: {
                x: {
                    ticks:{
                        size:3,
                    },
                  border: {
                    display: false,
                  },
                  grid: {
                    display: false,
                  }
                }
            }
        },
    };

    return (
        <div style={{ width: "600px", height: '500px' }}>
            <Line data={data} options={options} />

        </div>

    )
}

export default Chart