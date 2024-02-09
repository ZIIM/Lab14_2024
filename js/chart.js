'use strict';

let canvasElem = document.getElementById('chart')

/* TODO:
 * - Instantiate a new AppState
 * - Use a method on that AppState to load vote data from localStorage.
 * - Create a data object for chart.js using your AppState's allProducts array.
 * - Combine the data object with configuration information for chart.js type, colors, etc
 * - Call chart.js with the configuration and the canvasElem
 *
 */
function renderChart() {
    let appState = new AppState();
    appState.loadItems();
    // obj for chart
    let data = {
        labels: appState.allProducts.map(product => product.name),
        datasets: [
            {
              label: 'Times Clicked',
              data: appState.allProducts.map(product => product.timesClicked),
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
            },
            {
              label: 'Times Shown',
              data: appState.allProducts.map(product => product.timesShown),
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1
            }
        ]
        };
    let options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
        y: {
            beginAtZero: true
            }
        }
    };
        
    // chart.js with the configuration and the canvasElem
    let ctx = canvasElem.getContext('2d');
        new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
        });
}

renderChart();
