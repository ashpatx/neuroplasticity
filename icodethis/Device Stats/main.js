const chartData = {
  data: [31.6, 19.0, 49.4],
  labels: ["Tablet", "Mobile", "Desktop"]
};

const myChart = document.querySelector(".my-chart");

new Chart(myChart, {
  type: "doughnut",
  data: {
    labels: chartData.labels,
    datasets: [
      {
        label: "Sessions",
        data: chartData.data,
        backgroundColor: [
          "rgb(225,173,147)",
          "rgb(219,225,147)",
          "rgb(147,196,225)"
        ],
        hoverOffset: 5,
        hoverBorderWidth: 0,
        borderWidth: 4,
        borderColor: "rgb(28,72,99)"
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        fontColor: "rgb(246,250,253)",
        labels: {
          color: "rgb(246,250,253)",
          usePointStyle: true,
          boxWidth: 6,
          padding: 10
        }
      }
    }
  },
  plugins: [
    {
      id: "text",
      beforeDraw: function (chart, a, b) {
        var width = chart.width,
          height = chart.height,
          ctx = chart.ctx;

        ctx.restore();
        var fontSize = (height / 250).toFixed(2); // Adjust the value here
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "middle";

        var text = "Sessions",
          textX = Math.round(width / 2.8),
          textY = height / 2.5 - fontSize;

        (ctx.fillStyle = "rgb(246,250,253)"), ctx.fillText(text, textX, textY);

        text = "by Device";
        textY = height / 2;

        ctx.fillText(text, textX, textY);

        ctx.save();
      }
    }
  ]
});
