import React from 'react';
import { Line } from 'react-chartjs-2';

export default ({ steps }) => {
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
          borderWidth: 5,
          data,
          steppedLine: 'after',
          borderWidth: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.0)',
          borderColor: '#B8291E',
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
