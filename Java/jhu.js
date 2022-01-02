d3.csv("https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/jhu/new_cases_per_million.csv", function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}


var trace1 = {
  type: "bar",
  name: 'Datos diarios recopilados',
  x: unpack(rows, 'date'),
  y: unpack(rows, 'Mexico'),
  marker: {color: '#17BECF'}
}

var data = [trace1];

var layout = {
  title: 'Recopilación de JHU: Casos por millón de habitantes',
  plot_bgcolor: "#C1C8E4",
  paper_bgcolor:"#C1C8E4",
};

Plotly.newPlot("JHU", data, layout);
})
