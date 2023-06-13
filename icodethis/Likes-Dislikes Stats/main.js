const myChart = document.querySelector(".myChart");

new Chart(myChart, {
  type: "bar",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "# of Likes",
        data: [210, 190, 250, 220, 280, 240, 140],
        backgroundColor: ["#02c39a"],
        borderWidth: 1,
        hoverBorderColor: ["#05668d"]
      },
      {
        label: "# of Disikes",
        data: [160, 198, 210, 180, 255, 160, 210],
        backgroundColor: ["#028090"],
        borderWidth: 1,
        hoverBorderColor: ["#05668d"]
      }
    ]
  },

  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 300
      }
    },
    layout: {
      padding: 20
    },
    plugins: {
      legend: {
        position: "bottom",
        fontColor: "#1b263b",
        labels: {
          color: "#1b263b",
          padding: 10,
          usePointStyle: true,
          pointStyle: "rectRounded"
        }
      }
    }
  }
});
