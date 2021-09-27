var chart = am4core.create("compradas",am4charts.XYChart);
am4core.useTheme(am4themes_animated);


chart.dataSource.url = "Datos/new_Vacunas.csv";
chart.dataSource.parser = new am4core.CSVParser();
chart.dataSource.parser.options.useColumnNames = true; 


var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "abrev";
categoryAxis.renderer.grid.template.location = 0;

var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());

var series1 = chart.series.push(new am4charts.ColumnSeries());
series1.dataFields.categoryY = "abrev";
series1.dataFields.valueX = "Dosis_comp";
series1.name = "Dosis adquiridas";
series1.columns.template.fill = "#00566F";

var valueLabel = series1.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{Dosis_comp}";
valueLabel.label.fontSize=15;
valueLabel.label.truncate = false;
valueLabel.label.horizontalCenter = "left";
valueLabel.label.dx=-5
chart.legend = new am4charts.Legend();
chart.numberFormatter.numberFormat = "#.0a"
chart.responsive.enabled = true;