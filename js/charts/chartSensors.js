
$(function() {
  $(document).ready(function() {
    function certainTime() {
      var d = new Date();
      var weekday = new Array(7);
      weekday[0] = "Sunday";
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Friday";
      weekday[6] = "Saturday";
      var t = d.getHours();

      var n = weekday[d.getDay()];

      if(n== "friday" && t == 10 || n=="saturday" && t == 10){
       // Rezeptur A
      }

      if(n== "monday" && t == 10 || n== "tuesday" && t == 10 || n== "sunday" && t == 10){
       // Rezeptur B
      }

      if(n== "thursday" && t == 10 || n== "wednesday" && t == 10){
       // Rezeptur C
      }
    }


    $(function() {
      $(document).ready(function() {
        Highcharts.setOptions({
          global: {
            useUTC: false
          },
          colors: ['#7c99bb']
        });

        $('#foerderdruck-1-graph').highcharts({
          tooltip: {
            shared: false
          },
          credits: {
            enabled: false
          },
          title: {
            text: 'Throughput <span class="blue">kg/h</span>',
            align: 'left',
            floating: true,
              style: {
                color: '#424242',
                fontWeight: 'light',
                fontSize: '13px',
                fontFamily: 'Gotham',
                spanColor: '#fff'
              }
          },
          plotOptions: {
            areaspline: {
              fillOpacity: 0.8,
                series: {
                  pointPadding: 0,
                  groupPadding: 0,
              }
            },
            series: {
              marker: {
                enabled: false
              },
              zones: [{
                value: 0.5,
                color: '#7c99bb'
              }, {
                color: '#7c99bb'
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
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            events: {
              load: function () {

                  // set up the updating of the chart each second
                  var series = this.series[0];
                  setInterval(function () {
                      var x = (new Date()).getTime(), // current time
                          y = Math.random() * (320 - 280) + 280
                      series.addPoint([x, y], true, true);
                  }, 10000);
              }
          }
        },
          xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            floating: true,
            offset: -30,
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minPadding: 0,
            maxPadding: 0
          },

          yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            offset: -50,
            opposite: true,
            tickLength: 0,
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
              to: 300,
              linearGradient: [0, 0, 0, 350],
              color: 'rgba(123,152,184,0.5)',
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

                for (i = -999; i <= 0; i += 5) {
                    data.push([
                        time + i * 3000,
                        Math.random() * (320 - 280) + 280
                    ]);
                }
                return data;
            }())
          }]
        });

        $('#foerderdruck-3-graph').highcharts({
          tooltip: {
            shared: false
          },
          credits: {
            enabled: false
          },
          title: {
            text: 'Throughput <span class="blue">kg/h</span>',
            align: 'left',
            floating: true,
              style: {
                color: '#424242',
                fontWeight: 'light',
                fontSize: '13px',
                fontFamily: 'Gotham',
                spanColor: '#fff'
              }
          },
          plotOptions: {
            areaspline: {
              fillOpacity: 0.8,
                series: {
                  pointPadding: 0,
                  groupPadding: 0,
              }
            },
            series: {
              marker: {
                enabled: false
              },
              zones: [{
                value: 0.5,
                color: '#7c99bb'
              }, {
                color: '#7c99bb'
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
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            events: {
              load: function () {

                  // set up the updating of the chart each second
                  var series = this.series[0];
                  setInterval(function () {
                      var x = (new Date()).getTime(), // current time
                          y = Math.random() * (320 - 280) + 280
                      series.addPoint([x, y], true, true);
                  }, 10000);
              }
          }
        },
          xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            floating: true,
            offset: -30,
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minPadding: 0,
            maxPadding: 0
          },

          yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            offset: -50,
            opposite: true,
            tickLength: 0,
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
              to: 300,
              linearGradient: [0, 0, 0, 350],
              color: 'rgba(123,152,184,0.5)',
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

                for (i = -999; i <= 0; i += 5) {
                    data.push([
                        time + i * 3000,
                        Math.random() * (320 - 280) + 280
                    ]);
                }
                return data;
            }())
          }]
        });


        $('#filter-1-graph').highcharts({
          tooltip: {
            shared: false
          },
          credits: {
            enabled: false
          },
          title: {
            text: 'Filter mBar',
            align: 'left',
            floating: true,
              style: {
                color: '#424242',
                fontWeight: 'light',
                fontSize: '13px',
                fontFamily: 'Gotham',
                spanColor: '#fff'
              }
          },
          plotOptions: {
            areaspline: {
              fillOpacity: 0.8,
                series: {
                  pointPadding: 0,
                  groupPadding: 0,
              }
            },
            series: {
              marker: {
                enabled: false
              },
              zones: [{
                value: 0.5,
                color: '#7c99bb'
              }, {
                color: '#7c99bb'
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
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            events: {
              load: function () {

                  // set up the updating of the chart each second
                  var series = this.series[0];
                  setInterval(function () {
                      var x = (new Date()).getTime(), // current time
                          y = Math.random() * (8 - 12) + 12
                      series.addPoint([x, y], true, true);
                  }, 10000);
              }
          }
        },
          xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            floating: true,
            offset: -30,
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minPadding: 0,
            maxPadding: 0
          },

          yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            offset: -50,
            opposite: true,
            tickLength: 0,
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
              to: 10,
              linearGradient: [0, 0, 0, 350],
              color: 'rgba(123,152,184,0.5)',
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

                for (i = -999; i <= 0; i += 5) {
                    data.push([
                        time + i * 3000,
                        Math.random() * (8 - 12) + 12
                    ]);
                }
                return data;
            }())
          }]
        });


        $('#zxd-graph').highcharts({
          tooltip: {
            shared: false
          },
          credits: {
            enabled: false
          },
          title: {
            text: 'ZXD rpm',
            align: 'left',
            floating: true,
              style: {
                color: '#424242',
                fontWeight: 'light',
                fontSize: '13px',
                fontFamily: 'Gotham',
                spanColor: '#fff'
              }
          },
          plotOptions: {
            areaspline: {
              fillOpacity: 0.8,
                series: {
                  pointPadding: 0,
                  groupPadding: 0,
              }
            },
            series: {
              marker: {
                enabled: false
              },
              zones: [{
                value: 0.5,
                color: '#7c99bb'
              }, {
                color: '#7c99bb'
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
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            events: {
              load: function () {

                  // set up the updating of the chart each second
                  var series = this.series[0];
                  setInterval(function () {
                      var x = (new Date()).getTime(), // current time
                          y = Math.random() * (20 - 25) + 25
                      series.addPoint([x, y], true, true);
                  }, 10000);
              }
          }
        },
          xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            floating: true,
            offset: -30,
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minPadding: 0,
            maxPadding: 0
          },

          yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            offset: -40,
            opposite: true,
            tickLength: 0,
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
              to: 22,
              linearGradient: [0, 0, 0, 350],
              color: 'rgba(123,152,184,0.5)',
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

                for (i = -999; i <= 0; i += 5) {
                    data.push([
                        time + i * 3000,
                        Math.random() * (20 - 25) + 25
                    ]);
                }
                return data;
            }())
          }]
        });


        $('#zrd-graph').highcharts({
          tooltip: {
            shared: false
          },
          credits: {
            enabled: false
          },
          title: {
            text: 'ZRD rpm',
            align: 'left',
            floating: true,
              style: {
                color: '#424242',
                fontWeight: 'light',
                fontSize: '13px',
                fontFamily: 'Gotham',
                spanColor: '#fff'
              }
          },
          plotOptions: {
            areaspline: {
              fillOpacity: 0.8,
                series: {
                  pointPadding: 0,
                  groupPadding: 0,
              }
            },
            series: {
              marker: {
                enabled: false
              },
              zones: [{
                value: 0.5,
                color: '#7c99bb'
              }, {
                color: '#7c99bb'
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
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            events: {
              load: function () {

                  // set up the updating of the chart each second
                  var series = this.series[0];
                  setInterval(function () {
                      var x = (new Date()).getTime(), // current time
                          y = Math.random() * (20 - 25) + 25
                      series.addPoint([x, y], true, true);
                  }, 10000);
              }
          }
        },
          xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            floating: true,
            offset: -30,
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minPadding: 0,
            maxPadding: 0
          },

          yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            offset: -40,
            opposite: true,
            tickLength: 0,
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
              to: 22,
              linearGradient: [0, 0, 0, 350],
              color: 'rgba(123,152,184,0.5)',
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

                for (i = -999; i <= 0; i += 5) {
                    data.push([
                        time + i * 3000,
                        Math.random() * (20 - 25) + 25
                    ]);
                }
                return data;
            }())
          }]
        });

        $('#foerderdruck-1-graph').highcharts({
          tooltip: {
            shared: false
          },
          credits: {
            enabled: false
          },
          title: {
            text: 'Throughput <span class="blue">kg/h</span>',
            align: 'left',
            floating: true,
              style: {
                color: '#424242',
                fontWeight: 'light',
                fontSize: '13px',
                fontFamily: 'Gotham',
                spanColor: '#fff'
              }
          },
          plotOptions: {
            areaspline: {
              fillOpacity: 0.8,
                series: {
                  pointPadding: 0,
                  groupPadding: 0,
              }
            },
            series: {
              marker: {
                enabled: false
              },
              zones: [{
                value: 0.5,
                color: '#7c99bb'
              }, {
                color: '#7c99bb'
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
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            events: {
              load: function () {

                  // set up the updating of the chart each second
                  var series = this.series[0];
                  setInterval(function () {
                      var x = (new Date()).getTime(), // current time
                          y = Math.random() * (320 - 280) + 280
                      series.addPoint([x, y], true, true);
                  }, 10000);
              }
          }
        },
          xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            floating: true,
            offset: -30,
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minPadding: 0,
            maxPadding: 0
          },

          yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            offset: -50,
            opposite: true,
            tickLength: 0,
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
              to: 300,
              linearGradient: [0, 0, 0, 350],
              color: 'rgba(123,152,184,0.5)',
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

                for (i = -999; i <= 0; i += 5) {
                    data.push([
                        time + i * 3000,
                        Math.random() * (320 - 280) + 280
                    ]);
                }
                return data;
            }())
          }]
        });


        $('#foerderdruck-2-graph').highcharts({
          tooltip: {
            shared: false
          },
          credits: {
            enabled: false
          },
          title: {
            text: 'Throughput <span class="blue">kg/h</span>',
            align: 'left',
            floating: true,
              style: {
                color: '#424242',
                fontWeight: 'light',
                fontSize: '13px',
                fontFamily: 'Gotham',
                spanColor: '#fff'
              }
          },
          plotOptions: {
            areaspline: {
              fillOpacity: 0.8,
                series: {
                  pointPadding: 0,
                  groupPadding: 0,
              }
            },
            series: {
              marker: {
                enabled: false
              },
              zones: [{
                value: 0.5,
                color: '#7c99bb'
              }, {
                color: '#7c99bb'
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
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            events: {
              load: function () {

                  // set up the updating of the chart each second
                  var series = this.series[0];
                  setInterval(function () {
                      var x = (new Date()).getTime(), // current time
                          y = Math.random() * (320 - 280) + 280
                      series.addPoint([x, y], true, true);
                  }, 10000);
              }
          }
        },
          xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            floating: true,
            offset: -30,
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minPadding: 0,
            maxPadding: 0
          },

          yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            offset: -50,
            opposite: true,
            tickLength: 0,
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
              to: 300,
              linearGradient: [0, 0, 0, 350],
              color: 'rgba(123,152,184,0.5)',
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

                for (i = -999; i <= 0; i += 5) {
                    data.push([
                        time + i * 3000,
                        Math.random() * (320 - 280) + 280
                    ]);
                }
                return data;
            }())
          }]
        });


        $('#sensoring-full-durchsatz').highcharts({
          tooltip: {
            shared: false
          },
          credits: {
            enabled: false
          },
          title: {
            text: 'Throughput <span class="blue">kg/h</span>',
            align: 'left',
            floating: true,
              style: {
                color: '#424242',
                fontWeight: 'light',
                fontSize: '13px',
                fontFamily: 'Gotham',
                spanColor: '#fff'
              }
          },
          plotOptions: {
            areaspline: {
              fillOpacity: 0.8,
                series: {
                  pointPadding: 0,
                  groupPadding: 0,
              }
            },
            series: {
              marker: {
                enabled: false
              },
              zones: [{
                value: 0.5,
                color: '#7c99bb'
              }, {
                color: '#7c99bb'
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
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            events: {
              load: function () {

                  // set up the updating of the chart each second
                  var series = this.series[0];
                  setInterval(function () {
                      var x = (new Date()).getTime(), // current time
                          y = Math.random() * (2590 - 2600) + 2600
                      series.addPoint([x, y], true, true);
                  }, 10000);
              }
          }
        },
          xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            floating: true,
            offset: -30,
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minPadding: 0,
            maxPadding: 0
          },

          yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            offset: -50,
            opposite: true,
            tickLength: 0,
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
              to: 2600,
              linearGradient: [0, 0, 0, 350],
              color: 'rgba(123,152,184,0.5)',
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

                for (i = -999; i <= 0; i += 5) {
                    data.push([
                        time + i * 3000,
                        Math.random() * (2590 - 2600) + 2600
                    ]);
                }
                return data;
            }())
          }]
        });

        $('#sensoring-full-energieverbrauch').highcharts({
          tooltip: {
            shared: false
          },
          credits: {
            enabled: false
          },
          title: {
            text: 'Energy Consumption <span class="blue">kWh/h</span>',
            align: 'left',
            floating: true,
              style: {
                color: '#424242',
                fontWeight: 'light',
                fontSize: '13px',
                fontFamily: 'Gotham',
                spanColor: '#fff'
              }
          },
          plotOptions: {
            areaspline: {
              fillOpacity: 0.8,
                series: {
                  pointPadding: 0,
                  groupPadding: 0,
              }
            },
            series: {
              marker: {
                enabled: false
              },
              zones: [{
                value: 0.5,
                color: '#7c99bb'
              }, {
                color: '#7c99bb'
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
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            events: {
              load: function () {

                  // set up the updating of the chart each second
                  var series = this.series[0];
                  setInterval(function () {
                      var x = (new Date()).getTime(), // current time
                          y = Math.random() * (702 - 702) + 702
                      series.addPoint([x, y], true, true);
                  }, 10000);
              }
          }
        },
          xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            floating: true,
            offset: -30,
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minPadding: 0,
            maxPadding: 0
          },

          yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            offset: -50,
            opposite: true,
            tickLength: 0,
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
              to: 702,
              linearGradient: [0, 0, 0, 350],
              color: 'rgba(123,152,184,0.5)',
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

                for (i = -999; i <= 0; i += 5) {
                    data.push([
                        time + i * 3000,
                        Math.random() * (702 - 702) + 702
                    ]);
                }
                return data;
            }())
          }]
        });

        $('#sensoring-full-drehmoment').highcharts({
          tooltip: {
            shared: false
          },
          credits: {
            enabled: false
          },
          title: {
            text: 'Torque <span class="blue">%</span>',
            align: 'left',
            floating: true,
              style: {
                color: '#424242',
                fontWeight: 'light',
                fontSize: '13px',
                fontFamily: 'Gotham',
                spanColor: '#fff'
              }
          },
          plotOptions: {
            areaspline: {
              fillOpacity: 0.8,
                series: {
                  pointPadding: 0,
                  groupPadding: 0,
              }
            },
            series: {
              marker: {
                enabled: false
              },
              zones: [{
                value: 0.5,
                color: '#7c99bb'
              }, {
                color: '#7c99bb'
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
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            events: {
              load: function () {

                  // set up the updating of the chart each second
                  var series = this.series[0];
                  setInterval(function () {
                      var x = (new Date()).getTime(), // current time
                          y = Math.random() * (40 - 40) + 40
                      series.addPoint([x, y], true, true);
                  }, 10000);
              }
          }
        },
          xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            floating: true,
            offset: -30,
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            minPadding: 0,
            maxPadding: 0
          },

          yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            offset: -50,
            opposite: true,
            tickLength: 0,
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
              to: 40,
              linearGradient: [0, 0, 0, 350],
              color: 'rgba(123,152,184,0.5)',
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

                for (i = -999; i <= 0; i += 5) {
                    data.push([
                        time + i * 3000,
                        Math.random() * (40 - 40) + 40
                    ]);
                }
                return data;
            }())
          }]
        });


      });
    });


    Highcharts.setOptions({
      global: {
        useUTC: false
      },
      colors: ['#81a0c3']
    });

    var blue = '#81a0c3';

    $('#').highcharts({

      title: {
        text: 'Throughput <span class="blue">kg/h</span>',
        align: 'left',
        floating: true,
          style: {
            color: '#424242',
            fontWeight: 'light',
            fontSize: '13px',
            fontFamily: 'Gotham',
            spanColor: '#fff'
          }
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
            series: {
              pointPadding: 0,
              groupPadding: 0,
          }
        },
        series: {
          marker: {
            enabled: false
          },
          zones: [{
            value: 0.5,
            color: '#7c9cbb'
          }, {
            color: '#688cae'
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

        marginRight: -10,
        marginLeft: -10,
        events: {
            load: function () {

                // set up the updating of the chart each second
                var series = this.series[0];
                setInterval(function () {
                    var x = (new Date()).getTime(), // current time
                        y = Math.floor(Math.random() * 1) + 2600;
                    series.addPoint([x, y], true, true);
                }, 10000);
            }
        }
      },
      xAxis: {
        type: 'datetime',
        tickPixelInterval: 350,
        floating: true,
        labels: {
            align: 'left',
            x: 0,
            y: -10,
            style: {
              color: '#fff',
              font: 'Gotham',
              position: 'absolute'
            },
        },

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
          to: 4454284800,
          color: 'rgba(90,120,149,0.6)',
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

        type: 'spline',

        name: 'Durchsatz',
        data: (function () {
          // generate an array of random data
          var data = [],
              time = (new Date()).getTime(),
              i;

          for (i = -999; i <= 0; i += 1) {
              data.push([
                  time + i * 3000,
                  Math.floor(Math.random() * 1) + 2600
              ]);
          }
          return data;
        }())
      }]
    });

    $('#').highcharts({

      title: {
        text: 'Energy consumption <span class="blue">kWh/h</span>',
        align: 'left',
        zIndex: 100,
        floating: true,
          style: {
            color: '#424242',
            fontWeight: 'light',
            fontSize: '13px',
            fontFamily: 'Gotham',
            spanColor: '#fff',
          }
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
            value: 0.2,
            color: '#7c9cbb'
          }, {
            color: '#688cae'
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

        marginRight: -10,
        marginLeft: -10,
        events: {
            load: function () {

                // set up the updating of the chart each second
                var series = this.series[0];
                setInterval(function () {
                    var x = (new Date()).getTime(), // current time
                        y = Math.floor(Math.random() * 1) + 702;
                    series.addPoint([x, y], true, true);
                }, 10000);
            }
        }
      },
      xAxis: {
        type: 'datetime',
        tickPixelInterval: 350,
        floating: true,
        labels: {
            align: 'left',
            x: 0,
            y: -10,
            style: {
              color: '#fff',
              font: 'Gotham',
              position: 'absolute'
            },
        },

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
          to: 700,
          color: 'rgba(0,0,0,0.1)',
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

        name: 'Energieverbrauch',
        data: (function () {
          // generate an array of random data
          var data = [],
              time = (new Date()).getTime(),
              i;

          for (i = -999; i <= 0; i += 1) {
              data.push([
                  time + i * 3000,
                  Math.floor(Math.random() * 1) + 702
              ]);
          }
          return data;
        }())
      }]
    });

    $('').highcharts({

      title: {
        text: 'Torque <span class="blue">%</span>',
        align: 'left',
        floating: true,
          style: {
            color: '#424242',
            fontWeight: 'light',
            fontSize: '13px',
            fontFamily: 'Gotham',
            spanColor: '#fff'
          }
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
            color: '#7c9cbb'
          }, {
            color: '#688cae'
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

        marginRight: -10,
        marginLeft: -10,
        events: {
            load: function () {

                // set up the updating of the chart each second
                var series = this.series[0];
                setInterval(function () {
                    var x = (new Date()).getTime(), // current time
                        y = Math.floor(Math.random() * 0) + 40;
                    series.addPoint([x, y], true, true);
                }, 10000);
            }
        }
      },
      xAxis: {
        type: 'datetime',
        tickPixelInterval: 350,
        floating: true,
        labels: {
            align: 'left',
            x: 0,
            y: -10,
            style: {
              color: '#fff',
              font: 'Gotham',
              position: 'absolute'
            },
        },

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
          to: 4454284800,
          color: 'rgba(90,120,149,0.6)',
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

        name: 'Drehmoment',
        data: (function () {
          // generate an array of random data
          var data = [],
              time = (new Date()).getTime(),
              i;

          for (i = -999; i <= 0; i += 1) {
              data.push([
                  time + i * 3000,
                  Math.floor(Math.random() * 0) + 40
              ]);
          }
          return data;
        }())
      }]
    });


    $('').highcharts({

      title: {
        text: 'Förderdruck',
        align: 'left',
        floating: true,
          style: {
            color: '#424242',
            fontWeight: 'light',
            fontSize: '13px',
            fontFamily: 'Gotham',
            spanColor: '#fff'
          }
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
            color: '#7c9cbb'
          }, {
            color: '#688cae'
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
        marginLeft: -10,
        events: {
            load: function () {

                // set up the updating of the chart each second
                var series = this.series[0];
                setInterval(function () {
                    var x = (new Date()).getTime(), // current time
                        y = Math.random() * (320 - 280) + 280
                    series.addPoint([x, y], true, true);
                }, 10000);
            }
        }
      },
      xAxis: {
        type: 'datetime',
        tickPixelInterval: 350,
        floating: true,
        labels: {
            align: 'left',
            x: 0,
            y: -10,
            style: {
              color: '#fff',
              font: 'Gotham',
              position: 'absolute'
            },
        },

      },
      yAxis: {
        title: {
          text: 'ewewr'
        },
        plotLines: [{
          value: 0,
          width: 0,
          color: '#808080'
        }],
        plotBands: [{
          from: 0,
          to: 300,
          color: 'rgba(90,120,149,0.6)',
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

        name: 'Drehmoment',
        data: (function () {
          // generate an array of random data
          var data = [],
              time = (new Date()).getTime(),
              i;

          for (i = -999; i <= 0; i += 5) {
              data.push([
                  time + i * 3000,
                  Math.random() * (320 - 280) + 280
              ]);
          }
          return data;
        }())
      }]
    });

  });
});
