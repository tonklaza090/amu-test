const ctx = document.getElementById('myChart').getContext('2d');
const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const data = [12, 19, 15, 22, 18, 25];

const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: 'Sample Data',
      data: data,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 2,
      fill: true,
      tension: 0.3
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Realtime Dashboard Prototype' }
    },
    scales: { y: { beginAtZero: true } }
  }
});
