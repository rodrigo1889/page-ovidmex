d3.csv("Datos/Vacunas.csv").then(makeChart);
function makeChart(vacunas) {
    var marcas = vacunas.map(function(d) {return d.abrev})
    var entregas = vacunas.map(function(d) {return d.Dosis_disp})
    var ctx = document.getElementById('vaccines1');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: marcas,
            datasets: [{
                label: 'Dosis entregadas',
                data: entregas,
                backgroundColor: ['#00566F',"#20A39E","#EF5B5B","#FFC857","#424b54","#666e5a","#b66f65"],
                borderWidth: 0
            }]
        },
    });
}