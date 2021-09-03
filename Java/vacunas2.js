d3.csv("Datos/Tabla-vacunados.csv").then(makeChart);
function makeChart(vaccines) {
    var fechas = vaccines.map(function(d) {return d.Fecha})
    var dosis_t = vaccines.map(function(d) {return d.vacunados})
    var dosis_d = vaccines.map(function(d) {return d["Dosis-disp"]})
    var completos = vaccines.map(function(d) {return d["completos"]})
    var unidose = vaccines.map(function(d) {return d["Una dosis"]})
    var ctx = document.getElementById('vaccines2');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: fechas,
            datasets: [{
                label: "Al menos 1 dosis",
                data: unidose,
                backgroundColor: "#002316"
                
            },{
                label: "Dosis disponibles",
                data: dosis_d,
                backgroundColor: "rgba(209, 102, 102)",
            },{
                label: "Esquemas completos",
                data: completos,
                backgroundColor: "#001056"
            },{
                label: 'Dosis utilizadas',
                data: dosis_t,
                backgroundColor: '#00566F',
                //fill: true,
                //tension: 0.1
            }
            ]
        },
    });
};
