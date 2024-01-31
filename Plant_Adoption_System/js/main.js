document.addEventListener("DOMContentLoaded", function () {
    // Data for the bar chart
    const barChartData = {
        categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
        series: [
            { name: 'Series 1', data: [30, 40, 45, 50, 55] },
            // Add more series if needed
        ]
    };

    // Configuration for the bar chart
    const barChartOptions = {
        chart: {
            type: 'bar',
            height: 300,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '50%',
                endingShape: 'rounded',
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent'],
        },
        xaxis: {
            categories: barChartData.categories,
        },
        yaxis: {
            title: {
                text: 'Count',
            },
        },
        fill: {
            opacity: 1,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + " units";
                },
            },
        },
    };

    // Initialize the bar chart
    const barChart = new ApexCharts(document.querySelector("#barChart"), barChartOptions);

    // Render the bar chart
    barChart.render();
});
