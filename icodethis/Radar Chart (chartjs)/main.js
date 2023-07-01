const myChart = document.querySelector(".my-chart");

const chartData = {
  labels: [
    "Supporting",
    "Versatility",
    "Farming",
    "Emotionless",
    "Fighting",
    "Pushing"
  ],
  datasets: [
    {
      label: "Jordan's Data",
      data: [30, 40, 90, 10, 80, 30],
      fill: true,
      backgroundColor: "rgb(255, 160, 158, 0.2)",
      borderColor: "rgb(255, 160, 158)",
      pointBackgroundColor: "rgb(255, 160, 158)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 160, 158)"
    },
    {
      label: "Christine's Data",
      data: [40, 30, 30, 20, 20, 0],
      fill: true,
      backgroundColor: "rgb(107, 124, 207, 0.2)",
      borderColor: "rgb(107, 124, 207)",
      pointBackgroundColor: "rgb(107, 124, 207)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(107, 124, 207)"
    }
  ]
};

new Chart(myChart, {
  type: "radar",
  data: chartData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      r: {
        pointLabels: {
          font: {
            size: 10,
            family: "'Poppins', sans-serif",
            weight: "bold",
            lineHeight: 1.2
          }
        },
        grid: {
          circular: true
        },
        ticks: {
          beginAtZero: true,
          fontSize: 18,
          max: 100
        }
      }
    },
    elements: {
      line: {
        borderWidth: 3
      }
    },
    gridLines: {
      lineWidth: 2,
      color: "rgb(160, 172, 189)"
    },
    pointLabels: {
      fontSize: 18,
      fontStyle: "bold"
    }
  }
});
