define(["require", "exports", 'Scripts/MindFusion.Charting'], function (require, exports, m) {
    "use strict";
    var Charting = m.MindFusion.Charting;
    var Controls = m.MindFusion.Charting.Controls;
    var Collections = m.MindFusion.Charting.Collections;
    var Drawing = m.MindFusion.Charting.Drawing;
    // create the chart
    var pieChartEl = document.getElementById('pieChart');
    pieChartEl.width = pieChartEl.offsetParent.clientWidth;
    pieChartEl.height = pieChartEl.offsetParent.clientHeight;
    var pieChart = new Controls.PieChart(pieChartEl);
    pieChart.theme.loadFrom('Resources/DefaultExt.xml');
    pieChart.startAngle = 45;
    pieChart.showLegend = false;
    // create sample data
    var values = new Collections.List([20.00, 30.00, 10.00, 40.00]);
    pieChart.series = new Charting.PieSeries(values, new Collections.List(["20", "30", "10", "40"]), new Collections.List(["2016", "2015", "2014", "2013"]));
    var brushes = new Collections.List([
        new Drawing.Brush("#9caac6"),
        new Drawing.Brush("#003466"),
        new Drawing.Brush("#ce0000"),
        new Drawing.Brush("#e0e9e9")
    ]);
    var seriesBrushes = new Collections.List();
    seriesBrushes.add(brushes);
    var strokes = new Collections.List([
        new Drawing.Brush("#c0c0c0")
    ]);
    var seriesStrokes = new Collections.List();
    seriesStrokes.add(strokes);
    pieChart.plot.seriesStyle = new Charting.PerElementSeriesStyle(seriesBrushes, seriesStrokes);
    pieChart.theme.highlightStroke = new Drawing.Brush("#000063");
    pieChart.theme.dataLabelsFontSize = 16;
    pieChart.draw();
    // handlers
    var chartPadding = document.getElementById('chartPadding');
    chartPadding.valueAsNumber = pieChart.chartPadding;
    chartPadding.onchange = function () {
        pieChart.chartPadding = chartPadding.valueAsNumber;
        pieChart.draw();
    };
    var slice0 = document.getElementById('slice0');
    slice0.checked = pieChart.detachedSlices.contains(+slice0.value);
    slice0.onchange = function () { return sliceChanged(slice0); };
    var slice1 = document.getElementById('slice1');
    slice1.checked = pieChart.detachedSlices.contains(+slice1.value);
    slice1.onchange = function () { return sliceChanged(slice1); };
    var slice2 = document.getElementById('slice2');
    slice2.checked = pieChart.detachedSlices.contains(+slice2.value);
    slice2.onchange = function () { return sliceChanged(slice2); };
    var slice3 = document.getElementById('slice3');
    slice3.checked = pieChart.detachedSlices.contains(+slice3.value);
    slice3.onchange = function () { return sliceChanged(slice3); };
    function sliceChanged(control) {
        var slices = pieChart.detachedSlices;
        if (control.checked) {
            if (!slices.contains(+control.value))
                slices.add(+control.value);
        }
        if (!control.checked) {
            slices.remove(+control.value);
        }
        pieChart.detachedSlices = slices;
        pieChart.draw();
    }
    var startAngle = document.getElementById('startAngle');
    startAngle.valueAsNumber = pieChart.startAngle;
    startAngle.onchange = function () {
        pieChart.startAngle = startAngle.valueAsNumber;
        pieChart.draw();
    };
    var doughnut = document.getElementById('doughnut');
    doughnut.checked = pieChart.doughnut;
    doughnut.onchange = function () {
        pieChart.doughnut = doughnut.checked;
        pieChart.draw();
    };
    var allowRotate = document.getElementById('allowRotate');
    allowRotate.checked = pieChart.allowRotate;
    allowRotate.onchange = function () {
        pieChart.allowRotate = allowRotate.checked;
        pieChart.draw();
    };
    var showDataLabels = document.getElementById('showDataLabels');
    showDataLabels.checked = pieChart.showDataLabels == Charting.LabelKinds.All;
    showDataLabels.onchange = function () {
        if (showDataLabels.checked)
            pieChart.showDataLabels = Charting.LabelKinds.All;
        else
            pieChart.showDataLabels = Charting.LabelKinds.None;
        pieChart.draw();
    };
});
//# sourceMappingURL=PieChart.js.map