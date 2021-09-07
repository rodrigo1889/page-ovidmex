var chart = am4core.create("weeklyzmvm",am4charts.XYChart);
am4core.useTheme(am4themes_animated);

chart.dataSource.url = "Datos/WeeklyZMVM.csv";
chart.dataSource.parser = new am4core.CSVParser();
chart.dataSource.parser.options.useColumnNames = true;
chart.dataSource.dateFormat = "yyyy-MM-dd";

var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
dateAxis.dataFields.category = "index";

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

var series1 = chart.series.push(new am4charts.LineSeries());
series1.dataFields.valueY = "Casos";
series1.dataFields.dateX = "index";
series1.name = "Casos confirmados";
series1.stroke = am4core.color("#EF5B5B");
series1.tooltipText = "Casos: {valueY}";
series1.tooltip.getFillFromObject = false;
series1.tooltip.background.fill = am4core.color("#EF5B5B");
series1.strokeWidth = 4;


var series2 = chart.series.push(new am4charts.LineSeries());
series2.dataFields.valueY = "Defunciones";
series2.dataFields.dateX = "index";
series2.name = "Defunciones confirmadas";
series2.stroke = am4core.color("#00566F");
series2.tooltipText = "Defunciones: {valueY}";
series2.tooltip.getFillFromObject = false;
series2.tooltip.background.fill = am4core.color("#00566F");
series2.strokeWidth = 4;


var bullet1 = series1.bullets.push(new am4charts.Bullet());
bullet1.fill = am4core.color("#EF5B5B");

var bullet2 = series2.bullets.push(new am4charts.Bullet());
bullet2.fill = am4core.color("#00566F");

var circle = bullet2.createChild(am4core.Circle);
circle.radius = 3;
circle.fill = am4core.color("#C1C8E4");
circle.strokeWidth = 2;

var circle = bullet1.createChild(am4core.Circle);
circle.radius = 4;
circle.fill = am4core.color("#C1C8E4");
circle.strokeWidth = 3;


dateAxis.dateFormats.setKey("week","ww-yyyy");



chart.scrollbarX = new am4core.Scrollbar();
chart.scrollbarY = new am4core.Scrollbar();
chart.cursor = new am4charts.XYCursor();

chart.legend = new am4charts.Legend();

chart.numberFormatter.numberFormat = "#.00a";