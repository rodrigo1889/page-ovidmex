var chart = am4core.create("administradas",am4charts.XYChart);


chart.dataSource.url = "Datos/Tabla-vacunados.csv";
chart.dataSource.parser = new am4core.CSVParser();
chart.dataSource.parser.options.useColumnNames = true;

chart.dateFormatter.inputDateFormat = "yyyy-mm-dd";

var xAxis = chart.xAxes.push(new am4charts.DateAxis());
xAxis.dataFields.category = "strfecha";
xAxis.renderer.grid.template.location = 0;

//var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

var series1 = chart.series.push(new am4charts.LineSeries());
//series1.dataFields.valueX = "Dias";
series1.dataFields.categoryX = "strfecha";
series1.dataFields.valueY = "new_vaccines";
//series1.columns.template.fill = "#00566F";



chart.responsive.enabled = true;
chart.legend = new am4charts.Legend();
