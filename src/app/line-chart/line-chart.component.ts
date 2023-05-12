import { HttpClient } from '@angular/common/http';
import { Component, Input, SimpleChanges } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { SeriesOptionsType } from 'highcharts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent {
  @Input() actualData;
  products: any;
  selectedProduct: string = 'beer';
  productNames: string[] = [];
  xLabels: string[] = [];
  lineChart: Chart = new Chart();
  previewDataSeries: SeriesOptionsType[] = [];
  actualDataSeries: SeriesOptionsType[] = [];
  chartOptions: any;
  min: number = Number.MAX_VALUE;

  constructor(public http: HttpClient) {
    this.http.get('../../assets/json/lineData.json').subscribe((res) => {
      this.products = res;
      this.productNames = Object.keys(this.products);

      let grayShades = 0;

      for (let owner of this.products[this.selectedProduct]) {
        let previewLineData: SeriesOptionsType = {
          name: '',
          type: 'line',
          data: [],
          color: '',
          marker: {
            symbol: 'circle',
            radius: 2.5,
          },
        };
        let actualLineData: SeriesOptionsType = {
          name: '',
          type: 'line',
          data: [],
          marker: {
            symbol: 'circle',
            radius: 3,
          },
        };

        let name =
          this.selectedProduct.toUpperCase() +
          '|' +
          owner.company.toUpperCase();
        previewLineData.name = name;
        actualLineData.name = name;

        previewLineData.color = `rgb(${110 + grayShades}, ${
          110 + grayShades
        }, ${110 + grayShades})`;

        let sum = 0;
        for (let intervalSale of owner.revenueOfAWeekInterval) {
          actualLineData.data!.push(intervalSale.sales);
          sum += intervalSale.sales;
          if (intervalSale.sales < this.min) {
            this.min = intervalSale.sales;
          }
        }

        let previewData = sum / actualLineData.data!.length;
        previewLineData.data! = new Array(actualLineData.data!.length).fill(
          previewData
        );
        this.previewDataSeries.push(previewLineData);
        this.actualDataSeries.push(actualLineData);

        grayShades += 10;
        if (grayShades === 120) {
          grayShades = 0;
        }
      }

      for (let xlabel of this.products[this.selectedProduct][0]
        .revenueOfAWeekInterval) {
        this.xLabels.push('1w/e ' + xlabel.date);
      }

      this.chartOptions = {
        chart: {
          type: 'line',
        },
        credits: {
          enabled: false,
        },
        title: {
          text: null,
        },
        xAxis: {
          labels: {
            style: {
              fontSize: '12px',
            },
          },
          categories: this.xLabels,
          lineWidth: 0,
        },
        yAxis: {
          title: {
            text: '$',
            style: {
              fontSize: '15px',
              color: '#262626',
              fontWeight: '700',
            },
          },
          gridLineWidth: 0,
          labels: {
            style: {
              fontSize: '12px',
            },
          },
        },
        series: this.previewDataSeries,

        tooltip: {
          crosshairs: {
            width: 1,
            color: 'gray',
            dashStyle: 'dot',
          },
          formatter: function () {
            return '##';
          },
        },
        plotOptions: {
          line: {
            lineWidth: 1.5,
          },
          series: {
            cursor: 'pointer',
          },
        },
        legend: {
          itemMarginBottom: 5,
          itemStyle: {
            fontSize: '12px',
            color: '#262626',
          },
        },
      };
      this.lineChart = new Chart(this.chartOptions);
    });
  }
}