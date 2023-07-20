import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "./LineChart.css";

function LineChart({ chartData }) {
  const [axisfontsize, setaxisfontsize] = useState(14);
  if (window.outerWidth > 2000 && Window.outerWidth < 2500) {
    setaxisfontsize(35);
  }

  function resizeListener() {
    if (window.outerWidth > 900 && window.outerWidth < 1500) {
      setaxisfontsize(20);
    }
    if (window.outerWidth > 2000 && Window.outerWidth < 2500) {
      setaxisfontsize(30);
    }
    if (window.outerWidth > 2500 && Window.outerWidth < 3500) {
      setaxisfontsize(50);
    }
  }
  window.addEventListener("resize", resizeListener);

  const option = {
    responsive: true,

    scales: {
      x: {
        ticks: {
          font: {
            size: axisfontsize,
          },
        },
        display: true,

        title: {
          display: true,
          text: "Years",
          color: "#111",
          font: {
            family: "Comic Sans MS",
            size: axisfontsize,
            weight: "bold",
            lineHeight: 1.2,
          },
        },
      },
      y: {
        ticks: {
          font: {
            size: axisfontsize,
          },
        },
        display: true,
        title: {
          display: true,
          text: "Medal Won",
          color: "#111",
          font: {
            family: "Times",
            size: axisfontsize,
            style: "normal",
            weight: "bold",
            lineHeight: 1.2,
          },
        },
      },
    },
  };
  return (
    <div className="Chart-Container">
      <Line className="Line-Chart" data={chartData} options={option} />
    </div>
  );
}
export default LineChart;
