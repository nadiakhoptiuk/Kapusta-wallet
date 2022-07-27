import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const Chart = () => {
  const barChartData = {
    labels: [
      'Курица',
      'Говядина',
      'Свинина',
      'Рыба',
      'Панини',
      'Кофе',
      'Спагетти',
      'Шоколад',
      'Масло',
    ],

    datasets: [
      {
        data: [5000, 4500, 3200, 2100, 1800, 1700, 1500, 800, 500],

        label: 'продукти',

        borderColor: 'rgba(245, 246, 251, 1)',
        backgroundColor: [
          'rgba(255, 117, 29, 1)',
          'rgba(255, 218, 192, 1)',
          'rgba(255, 218, 192, 1)',
        ],
        borderRadius: '10',
        fill: true,
        borderJoinStyle: 'bevel',
        showLine: false,
        indexAxis: 'x',
      },
    ],
  };

  const barChart = (
    <Bar
      type="bar"
      width={130}
      height={50}
      options={{
        plugins: {
          legend: {
            display: false,
          },
        },

        scales: {
          legend: {
            display: false,
            position: 'bottom',
          },

          y: {
            min: 0,
            max: 5500,
            ticks: {
              display: false,
              // forces step size to be 50 units
            },
          },
          x: { grid: { lineWidth: 0 } },
        },
      }}
      data={barChartData}
    />
  );
  return barChart;
};

export default Chart;
