import { Component, OnInit } from '@angular/core';
import {Chart, ChartConfiguration, ChartItem, registerables} from 'node_modules/chart.js'


@Component({
  selector: 'app-homedashboard',
  templateUrl: './homedashboard.component.html',
  styleUrls: ['./homedashboard.component.css']
})
export class HomedashboardComponent implements OnInit {

  chart: any;

  constructor() { }

  ngOnInit(): void {
    this.createChart2();
    this.createChart1();


  }

  createChart2(): void {
    Chart.register(...registerables);
    const data = {
      labels: ['January','February','March','April','May'],
      datasets: [{
        label: 'Consomation',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [10, 5, 2, 20, 30, 45],
      }]
};
const options = {
  scales: {
    y: {
      beginAtZero: true,
      display: false
    }
  }
}

const config: ChartConfiguration = {
  type: 'bar',
  data: data,
  options: options
}
const chartItem: ChartItem = document.getElementById('mychart2') as ChartItem

new Chart(chartItem, config)

  }


  createChart1(): void {
    Chart.register(...registerables);
    const data = {
        labels: ['Etage 1','Etage 2','Etage 3','Etage 4','Etage 5','Etage 6'],
        datasets: [{
            
            backgroundColor: [
                "rgba(75, 192, 192, 0.2)",
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 205, 86, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(100, 162, 235, 0.2)",
                "rgba(170, 162, 235, 0.2)",
            ],
            data: [10, 5, 2, 20, 30],
        }]
    };

  

    const config: ChartConfiguration = {
        type: 'doughnut', // Change chart type to 'doughnut'
        data: data
    };

    const chartItem: ChartItem = document.getElementById('mychart1') as ChartItem;

    new Chart(chartItem, config);
}


}
