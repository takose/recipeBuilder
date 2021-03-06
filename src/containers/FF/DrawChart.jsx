import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';

const DrawChart = ({ steps }) => {
  const data = steps === undefined ?
    [] :
    steps.reduce((result, step) => (
      [...result, ...Array(step.time).fill(step.power)]
    ), [0]);
  return (
    <Line
      data={{
        labels: [...Array(data.length).keys()],
        datasets: [{
          label: 'FF',
          pointBackgroundColor: '#FF1200',
          pointBorderColor: '#FF1200',
          data,
          steppedLine: 'after',
          borderWidth: 1,
          pointRadius: 3,
          backgroundColor: 'rgba(0, 0, 0, 0.0)',
          borderColor: '#FF1200',
        }],
      }}
      options={{
        animation: {
          duration: 0,
        },
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'time',
            },
          }],
          yAxes: [{
            ticks: {
              min: 0,
              max: 6,
            },
            scaleLabel: {
              display: true,
              labelString: 'power',
            },
          }],
        },
      }}
    />
  );
};

DrawChart.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DrawChart;
