var chart = am4core.create("administradas",am4charts.XYChart);
am4core.useTheme(am4themes_animated);

chart.dataSource.url = "Datos/Tabla-vacunados.csv";
chart.dataSource.parser = new am4core.CSVParser();
chart.dataSource.parser.options.useColumnNames = true;
chart.dataSource.dateFormat = "yyyy-MM-dd";

var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
dateAxis.dataFields.category = "date";


var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

var series1 = chart.series.push(new am4charts.ColumnSeries());
series1.dataFields.valueY = "new_vaccines";
series1.dataFields.dateX = "date";
series1.name = "Dosis administradas";
series1.columns.template.fill = "#00566F";
series1.tooltipText = "Dosis {dateX}: {valueY}"


var series2 = chart.series.push(new am4charts.LineSeries());
series2.dataFields.valueY = "smooth";
series2.dataFields.dateX = "date";
series2.name = "Promedio de 7 días";
series2.stroke = am4core.color("#DB275C");
series2.strokeWidth = 4;
series2.tooltipText = "Prom {dateX}: {valueY}"

var bullet = series2.bullets.push(new am4charts.Bullet());
bullet.fill = am4core.color("#ffff");

var circle = bullet.createChild(am4core.Circle);
circle.radius = 3;
circle.fill = am4core.color("#C1C8E4");
circle.strokeWidth = 2;


chart.scrollbarX = new am4core.Scrollbar();
chart.scrollbarY = new am4core.Scrollbar();
chart.cursor = new am4charts.XYCursor();

chart.legend = new am4charts.Legend();

chart.numberFormatter.numberFormat = "#.0a";
//chart.responsive.enabled = true;





