var chart = am4core.create("cdmx-vaccines",am4charts.XYChart);
am4core.useTheme(am4themes_animated);


chart.dataSource.url = "Datos/CDMX-vac.csv";
chart.dataSource.parser = new am4core.CSVParser();
chart.dataSource.parser.options.useColumnNames = true;



var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.max = 100;

var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Alc";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 20;



var series1 = chart.series.push(new am4charts.ColumnSeries());
series1.dataFields.categoryY = "Alc";
series1.dataFields.valueX = "porcen";
series1.name = "Coberturas por alcaldía (%)";
series1.columns.template.fill = "#006f51";

chart.legend = new am4charts.Legend();
chart.cursor = new am4charts.XYCursor();
chart.responsive.enabled = true;

