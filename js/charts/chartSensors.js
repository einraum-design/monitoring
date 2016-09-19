$(function() {
  $(document).ready(function() {
    Highcharts.setOptions({
      global: {
        useUTC: false
      },
      colors: ['#81a0c3']
    });

    $('#sensoring-full-durchsatz').highcharts({

      title: {
        text: 'null',
        align: 'left'
      },

      tooltip: {
        shared: false
      },

      credits: {
        enabled: false
      },

      plotOptions: {
        areaspline: {
          fillOpacity: 0.8,
        },
        series: {
          marker: {
            enabled: false
          },
          zones: [{
            value: 0.5,
            color: '#f7a35c'
          }, {
            color: '#90ed7d'
          }],
          lineWidth: 0
        }
      },
      chart: {

        type: 'area',



        backgroundColor: {
          linearGradient: [0, 0, 0, 350],
          stops: [
            [0, 'rgb(245, 245, 245)'],
            [1, 'rgb(245, 245, 245)']
          ]
        },

        marginRight: 10,
        events: {
          load: function() {

            // set up the updating of the chart each second
            var series = this.series[0];
            setInterval(function() {
              var x = (new Date()).getTime(), // current time
                y = Math.random();
              series.addPoint([x, y], true, true);
            }, 1000);
          }
        }
      },
      xAxis: {
        type: 'datetime',
        tickPixelInterval: 150
      },
      yAxis: {
        title: {
          text: ''
        },
        plotLines: [{
          value: 0,
          width: 0,
          color: '#808080'
        }],
        plotBands: [{
          from: 0,
          to: 0.5,
          color: 'rgba(230,120,50,0.2)',
          zIndex: 5
        }]
      },
      tooltip: {
        enabled: false

      },
      legend: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      series: [{


        name: 'Durchsatz',
        data: (function() {
          var data = [],
            time = (new Date()).getTime(),
            i;

          for (i = -19; i <= 0; i += 1) {
            data.push({
              x: time + i * 1000,
              y: Math.random()
            });
          }
          return data;
        }())
      }]
    });
  });
});
