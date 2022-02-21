import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements OnInit {
  ctx: any;
  constructor() { }

  ngOnInit(): void {
    this.prog();
    this.soft();
  }

  prog() {
    this.ctx = document.getElementById('prog');
    const prog = new Chart(this.ctx, {
      type: 'polarArea',
      data: {
        labels: [
          'Angular',
          'Node JS',
          'Express JS',
          'TypeScript',
          'HTML',
          'CSS'
        ],
        datasets: [{
          data: [70, 80, 90, 90, 100, 100],
          backgroundColor: [
            'rgb(142, 47, 252)',
            'rgb(172, 50, 253)',
            'rgb(246, 63, 247)',
            'rgb(246, 63, 247)',
            'rgb(254, 106, 133)',
            'rgb(254, 106, 133)',
          ]
        }]
      },
      options: {
        plugins: {
          tooltip: {
            enabled: true
          },
          legend: {
            display: false
          }
        }
      },
    });
  }

  soft() {
    this.ctx = document.getElementById('soft');
    const soft = new Chart(this.ctx, {
      type: 'polarArea',
      data: {
        labels: [
          'VS Code',
          'Github',
          'MongoDB',
          'Confluence',
          'Jira',
          'AWS'
        ],
        datasets: [{
          data: [90, 90, 80, 80, 70, 50],
          backgroundColor: [
            'rgb(246, 63, 247)',
            'rgb(246, 63, 247)',
            'rgb(172, 50, 253)',
            'rgb(172, 50, 253)',
            'rgb(142, 47, 252)',
            'rgb(118, 0, 255)',
          ]
        }]
      },
      options: {
        plugins: {
          tooltip: {
            enabled: true
          },
          legend: {
            display: false
          }
        }
      },
    });
  }
}
