import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public chart: any;
  constructor() { }

  ngOnInit() {
    /*     setInterval(() => {
          location.reload();
        }, 30000); */
    this.createChart();
    this.createChart2();
    this.createChart3();
    this.createChart4();
  }
  createChart() {

    this.chart = new Chart("MyChart", {
      type: 'bar',

      data: {// values on X-Axis
        labels: ['10-15', '15-20', '20-25', '25-30', '30-35', '40-45', '45-50'],
        datasets: [
          {
            label: "Usuarios Edades",
            data: ['2', '4', '6', '8', '10', '32', '40'],
            backgroundColor: ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink']
          }
        ]
      },
      options: {
        aspectRatio: 2.5
      }

    });
  }


  createChart2() {
    this.chart = new Chart("MyChart2", {
      type: 'pie', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Sierra', 'Costa', 'Oriente', 'Galapagos'],
        datasets: [
          {
            label: "Usuarios",
            data: [467, 576, 572, 79],
            backgroundColor: ['red', 'green', 'blue', 'yellow']
          }
        ]
      },
      options: {
        aspectRatio: 2.5
      }
    });

  }

  createChart3() {

    this.chart = new Chart("MyChart3", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12', '2022-05-13',
          '2022-05-14', '2022-05-15', '2022-05-16', '2022-05-17',],
        datasets: [
          {
            label: "Jovenes",
            data: ['20', '50', '40', '50', '80',
              '70', '93', '10'],
            backgroundColor: ['red', 'green', 'blue', 'yellow'],
            borderColor: 'limegreen'

          },
          {
            label: "Adultos",
            data: ['56', '120', '90', '98', '110',
              '23', '78', '21'],
            backgroundColor: ['red', 'green', 'blue', 'yellow'],
            borderColor: 'tomato'
          }
        ]
      },
      options: {
        aspectRatio: 2.5
      }

    });
  }

  createChart4() {

    this.chart = new Chart("MyChart4", {
      type: 'doughnut',//this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Kichwa',
          'Shuar',
          'Huaorani',
          'Achuar',
          'Zapara',
          'Siona',
          'Secoya',
          'Cofán'],
        datasets: [
          {
            label: "Nacionalidad",
            data: ['100', '162', '120', '90', '92',
              '139', '124', '176'],
            backgroundColor: ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'grey']
          }
        ]
      },
      options: {
        aspectRatio: 2.5,


      }

    });
  }

}
