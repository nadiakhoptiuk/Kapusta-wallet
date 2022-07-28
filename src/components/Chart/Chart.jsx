import React from 'react';
import { Bar } from 'react-chartjs-2';

import ChartDataLabels from 'chartjs-plugin-datalabels';
import ChartJS from 'chart.js/auto';
import addSpaceForAmount from '../../utils/addSpaceForAmount';
ChartJS.register(ChartDataLabels);

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

        borderColor: 'rgba(245, 246, 251, 1)',
        backgroundColor: [
          'rgba(255, 117, 29, 1)',
          'rgba(255, 218, 192, 1)',
          'rgba(255, 218, 192, 1)',
        ],
        borderRadius: '12',
        fill: true,
        borderJoinStyle: 'bevel',
        borderWidth: '1',
        showLine: false,
        indexAxis: 'x',
        barPercentage: 0.5,
        barThickness: 38,
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
          datalabels: {
            color: '#52555f',
            anchor: 'end',
            offset: 5,
            align: 'end',
            formatter: value =>
              `${addSpaceForAmount(Math.floor(value)).split('.')[0]} грн`,
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
            stacked: true,
            ticks: {
              display: false,
            },
          },
          x: {
            grid: { lineWidth: 0 },
            stacked: true,
          },
        },
      }}
      data={barChartData}
    />
  );
  return barChart;
};

export default Chart;
