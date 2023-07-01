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
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgb(255, 99, 132)",
      pointBackgroundColor: "rgb(255, 99, 132)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)"
    },
    {
      label: "Christine's Data",
      data: [40, 30, 30, 20, 20, 0],
      fill: true,
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgb(54, 162, 235)",
      pointBackgroundColor: "rgb(54, 162, 235)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(54, 162, 235)"
    }
  ]
};

new Chart(myChart, {
  type: "radar",
  data: chartData,
  options: {
    plugins: {
    elements: {
      line: {
        borderWidth: 3
      }
    }
  }
});
