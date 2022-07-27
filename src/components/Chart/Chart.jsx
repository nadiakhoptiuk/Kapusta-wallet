import React from 'react';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
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
  const topLabels = {
    id: 'topLabels',
    afterDatasetDraw(chart, args, plugionOptions) {
      const {
        ctx,
        scales: { x, y },
      } = chart;
      chart.data.datasets.forEach((datapoint, index) => {
        const datasetArray = [];
        chart.data.datasets.forEach(dataset => {
          datasetArray.push(dataset.data[index]);
        });
        function value(values) {
          return values;
        }
        let sum = datasetArray.reduce(value, 0);
        console.log(sum);
        ctx.font = 'bold 12px Roboto';
        ctx.fillStyle = 'blue';
        ctx.textAlign = 'center';
        ctx.ctx.fillText(
          sum,
          x.getPixelForValue(index),
          chart.getDatasetMeta(1).data[index].y - 10
        );
      });
    },
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
          topLabels,
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
              // forces step size to be 50 units
            },
          },
          x: {
            grid: { lineWidth: 0 },
            stacked: true,
          },
        },
      }}
      //   onAnimationComplete = function  (){

      //     var ctx = this.chart.ctx;
      //     ctx.font = this.scale.font;
      //     ctx.fillStyle = this.scale.textColor
      //     ctx.textAlign = "center";
      //     ctx.textBaseline = "bottom";

      //     this.datasets.forEach(function (dataset) {
      //         dataset.bars.forEach(function (bar) {
      //             ctx.fillText(bar.value, bar.x, bar.y - 5);
      //         });
      //     })
      // }
      data={barChartData}
    />
  );
  return barChart;
};

export default Chart;
