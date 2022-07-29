import React, { Fragment } from 'react';
import { Bar } from 'react-chartjs-2';

import ChartDataLabels from 'chartjs-plugin-datalabels';
import ChartJS from 'chart.js/auto';
import addSpaceForAmount from '../../utils/addSpaceForAmount';
import Media from 'react-media';
import s from './Chart.module.css';

ChartJS.register(ChartDataLabels);

const Chart = ({ labels, data }) => {
  // ------------TABLET/DESKTOP---------------------------------
  const barChartData = {
    labels: labels,

    datasets: [
      {
        data: data,

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
        responsive: true,
        barPercentage: 0.5,
        barThickness: 38,
      },
    ],
  };
  // -------------------------MOBILE-------------------------
  const barChartDataMobile = {
    labels: labels,

    datasets: [
      {
        data: [0, 0, 0, 0, 0, 0],

        datalabels: {
          font: {
            size: '12',
          },
          color: '#52555f',
          labels: {
            title: {
              align: 'right',
            },
          },
          anchor: 'end',
          offset: 5,
          // align: 'top',
          barPercentage: 0.5,
          categoryPercentage: 1,

          formatter: (_, context) => {
            const labels = context.chart.data.labels[context.dataIndex];

            return labels;
          },
        },

        borderColor: 'rgba(245, 246, 251, 1)',
        backgroundColor: ['transparent'],
      },
      {
        data: data,

        datalabels: {
          font: {
            size: '12',
          },
          color: '#52555f',
          labels: {
            title: {
              align: 'right',
            },
          },
          anchor: 'end',
          offset: 1,
          align: 'top',

          formatter: value => {
            return `${addSpaceForAmount(Math.floor(value)).split('.')[0]} грн`;
          },
        },

        borderColor: 'transparent',
        backgroundColor: [
          'rgba(255, 117, 29, 1)',
          'rgba(255, 218, 192, 1)',
          'rgba(255, 218, 192, 1)',
        ],
        borderRadius: '12',
        fill: true,
        borderJoinStyle: 'bevel',
        borderWidth: 'none',
        showLine: false,

        // responsive: true,
        // categoryPercentage: 0.5,

        barPercentage: 1,
        barThickness: 15,
      },
    ],
  };

  const barChartMobil = (
    <Bar
      type="bar"
      width={100}
      height={100}
      options={{
        indexAxis: 'y',
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

          x: {
            stacked: true,
            offset: true,
            grid: { offset: true, lineWidth: 0 },
            ticks: {
              display: false,
            },
          },
          y: {
            offset: true,
            grid: { offset: true, lineWidth: 0 },
            stacked: true,
            ticks: {
              display: false,
            },
          },
        },
      }}
      data={barChartDataMobile}
    />
  );
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
            offset: 3,
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
            // max: 5500,
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
  return (
    <Media
      queries={{
        small: '(max-width: 767px)',
        medium: '(min-width: 768px)',
      }}
    >
      {matches => (
        <Fragment>
          {matches.small && <div className={s.barMob}>{barChartMobil}</div>}
          {matches.medium && <div className={s.bar}>{barChart}</div>}
        </Fragment>
      )}
    </Media>
  );
};

export default Chart;
