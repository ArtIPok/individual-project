/* global Chart*/

const ctx = document.getElementById('myChart').getContext('2d');

const chart = new Chart(ctx, {
  // type chart, eg columns
  type: 'bar',
  data: {
    // label for X axis
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
    // data series
    datasets: [{
      // data series name
      label: 'Signups',
      // data series color
      backgroundColor: '#8DBEC8',
      borderColor: '#8DBEC8',
      // sample data
      data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
    },
    {
      label: 'FTD',
      backgroundColor: '#F29E4E',
      borderColor: '#F29E4E',
      data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
    },
    {
      label: 'Earned',
      backgroundColor: '#71B374',
      borderColor: '#71B374',
      data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
      // last data series hidden
      hidden: true,
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Earnings chart',
      position: 'top',
      fontColor: '#60b4e4',
      fontStyle: 'italic',
    }
  },
});
console.log(chart);

function toggleMenu(visible) {
  document.querySelector('.menu').classList.toggle('show', visible);
}

document.querySelector('.hamburger').addEventListener('click', function(event) {
  event.preventDefault();
  toggleMenu();
});
