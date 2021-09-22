var chart = am4core.create("internacional-vaccines",am4charts.XYChart);
am4core.useTheme(am4themes_animated);

chart.dataSource.url = "https://raw.githubusercontent.com/rodrigo1889/page-ovidmex/main/Datos/international-vaccines.csv";
chart.dataSource.parser = new am4core.CSVParser();
chart.dataSource.parser.options.useColumnNames = true;
chart.dataSource.dateFormat = "yyyy-MM-dd";


var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
dateAxis.dataFields.category = "date";

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());


var series1 = chart.series.push(new am4charts.LineSeries());
series1.dataFields.valueY = "Mexico";
series1.dataFields.dateX = "date";
series1.name = "México";
series1.stroke = am4core.color("#EF5B5B");
series1.tooltipText = "{name} DosisP/100: {valueY}";
series1.tooltip.getFillFromObject = false;
series1.tooltip.background.fill = am4core.color("#EF5B5B");
series1.strokeWidth = 4;

var series2 = chart.series.push(new am4charts.LineSeries());
series2.dataFields.valueY = "Argentina";
series2.dataFields.dateX = "date";
series2.name = "Argentina";
series2.stroke = am4core.color("#ff9505");
series2.tooltipText = "{name} DosisP/100: {valueY}";
series2.tooltip.getFillFromObject = false;
series2.tooltip.background.fill = am4core.color("#ff9505");
series2.strokeWidth = 4;


var series3 = chart.series.push(new am4charts.LineSeries());
series3.dataFields.valueY = "Russia";
series3.dataFields.dateX = "date";
series3.name = "Rusia";
series3.stroke = am4core.color("#20a39e");
series3.tooltipText = "{name} DosisP/100: {valueY}";
series3.tooltip.getFillFromObject = false;
series3.tooltip.background.fill = am4core.color("#20a39e");
series3.strokeWidth = 4;


var series4 = chart.series.push(new am4charts.LineSeries());
series4.dataFields.valueY = "China";
series4.dataFields.dateX = "date";
series4.name = "China";
series4.stroke = am4core.color("#5b5bef");
series4.tooltipText = "{name} DosisP/100: {valueY}";
series4.tooltip.getFillFromObject = false;
series4.tooltip.background.fill = am4core.color("#5b5bef");
series4.strokeWidth = 4;


var series5 = chart.series.push(new am4charts.LineSeries());
series5.dataFields.valueY = "United States";
series5.dataFields.dateX = "date";
series5.name = "Estados Unidos";
series5.stroke = am4core.color("#5bef5b");
series5.tooltipText = "{name} DosisP/100: {valueY}";
series5.tooltip.getFillFromObject = false;
series5.tooltip.background.fill = am4core.color("#5bef5b");
series5.strokeWidth = 4;


var series6 = chart.series.push(new am4charts.LineSeries());
series6.dataFields.valueY = "Cuba";
series6.dataFields.dateX = "date";
series6.name = "Cuba";
series6.stroke = am4core.color("#5befef");
series6.tooltipText = "{name} DosisP/100: {valueY}";
series6.tooltip.getFillFromObject = false;
series6.tooltip.background.fill = am4core.color("#5befef");
series6.strokeWidth = 4;

var series6 = chart.series.push(new am4charts.LineSeries());
series6.dataFields.valueY = "Canada";
series6.dataFields.dateX = "date";
series6.name = "Canada";
series6.stroke = am4core.color("#161925");
series6.tooltipText = "{name} DosisP/100: {valueY}";
series6.tooltip.getFillFromObject = false;
series6.tooltip.background.fill = am4core.color("#161925");
series6.strokeWidth = 4;




//var bullet1 = series1.bullets.push(new am4charts.Bullet());
//bullet1.fill = am4core.color("#EF5B5B");

//var circle = bullet1.createChild(am4core.Circle);
//circle.radius = 4;
//circle.fill = am4core.color("#C1C8E4");
//circle.strokeWidth = 3;





chart.scrollbarX = new am4core.Scrollbar();
chart.scrollbarY = new am4core.Scrollbar();
chart.cursor = new am4charts.XYCursor();

chart.legend = new am4charts.Legend();


