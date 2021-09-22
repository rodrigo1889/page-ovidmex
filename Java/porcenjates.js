var chart = am4core.create("porcentajes",am4charts.XYChart);


chart.dataSource.url = "Datos/new_Vacunas.csv";
chart.dataSource.parser = new am4core.CSVParser();
chart.dataSource.parser.options.useColumnNames = true;


var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "abrev";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.fontsize = 5;

var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.max = 100;

var series1 = chart.series.push(new am4charts.ColumnSeries());
series1.dataFields.categoryY = "abrev";
series1.dataFields.valueX = "Porcentaje"; 
series1.name = "Porcentaje de entregas (%)"

series1.heatRules.push({
    "target": series1.columns.template,
    "property": "fill",
    "min": am4core.color("#00aadb"),
    "max": am4core.color("#00566F"),
    "dataField": "valueX"
  });

chart.legend = new am4charts.Legend();