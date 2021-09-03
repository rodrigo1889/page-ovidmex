d3.csv("Datos/Coronavirus.csv").then(makeChart);
function makeChart(players) {
    var playerLabels = players.map(function(d) {return d.Fecha})
    var ocupacion = players.map(function(d) {return d.IRAG})
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: playerLabels,
            datasets: [{
                label: 'Ocupación de camas IRAG',
                data: ocupacion,
                backgroundColor: ['#00566F'],
                borderWidth: 0
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
};

