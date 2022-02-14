import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  ctx: any;
  constructor() { }

  ngOnInit(): void {
    this.angular();
    this.node();
    this.express();
    this.typeScript();
    this.html();
    this.css();
    this.vscode();
    this.github();
    this.mongodb();
    this.confluence();
    this.jira();
    this.aws();
  }

  angular() {
    this.ctx = document.getElementById('angular');
    const counter = {
      id: 'counter',
      beforeDraw(chart: { ctx: any; chartArea: { top: any; right: any; bottom: any; left: any; width: any; height: any; }; }) {
        const { ctx, chartArea: { top, right, bottom, left, width, height } } = chart;
        ctx.save();
        ctx.font = '40px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'white';
        ctx.fillText('90%', width / 2, top + (height / 2));
      }
    };
    Chart.defaults.font.size = 20;
    const angular = new Chart(this.ctx, {
      type: 'doughnut',
      data: {
        datasets: [{
          label: 'Angular',
          data: [90, 10],
          backgroundColor: [
            'rgb(142, 47, 252)',
            'rgba(0, 0, 0, 0.1)',
          ],
          borderWidth: 0
        }]
      },
      options: {
        plugins: {
          title: {
              display: true,
              text: 'Angular',
          },
          tooltip: {
            enabled: false
          }
        }
      },
      plugins: [counter]
    });
  }

  node() {
    this.ctx = document.getElementById('node');
    const counter = {
      id: 'counter',
      beforeDraw(chart: { ctx: any; chartArea: { top: any; right: any; bottom: any; left: any; width: any; height: any; }; }) {
        const { ctx, chartArea: { top, right, bottom, left, width, height } } = chart;
        ctx.save();
        ctx.font = '40px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'white';
        ctx.fillText('70%', width / 2, top + (height / 2));
      }
    };
    Chart.defaults.font.size = 20;
    const node = new Chart(this.ctx, {
      type: 'doughnut',
      data: {

        datasets: [{
          label: 'Node JS',
          data: [70, 30],
          backgroundColor: [
            'rgb(246, 63, 247)',
            'rgba(0, 0, 0, 0.1)',
          ],
          borderWidth: 0
        }]
      },
      options: {
        plugins: {
          title: {
              display: true,
              text: 'Node JS',
          },
          tooltip: {
            enabled: false
          }
        }
      },
      plugins: [counter]
    });
  }

  express() {
    this.ctx = document.getElementById('express');
    const counter = {
      id: 'counter',
      beforeDraw(chart: { ctx: any; chartArea: { top: any; right: any; bottom: any; left: any; width: any; height: any; }; }) {
        const { ctx, chartArea: { top, right, bottom, left, width, height } } = chart;
        ctx.save();
        ctx.font = '40px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'white';
        ctx.fillText('80%', width / 2, top + (height / 2));
      }
    };
    Chart.defaults.font.size = 20;
    const express = new Chart(this.ctx, {
      type: 'doughnut',
      data: {

        datasets: [{
          label: 'Express JS',
          data: [80, 20],
          backgroundColor: [
            'rgb(172, 50, 253)',
            'rgba(0, 0, 0, 0.1)',
          ],
          borderWidth: 0
        }]
      },
      options: {
        plugins: {
          title: {
              display: true,
              text: 'Express JS',
          },
          tooltip: {
            enabled: false
          }
        }
      },
      plugins: [counter]
    });
  }

  typeScript() {
    this.ctx = document.getElementById('type');
    const counter = {
      id: 'counter',
      beforeDraw(chart: { ctx: any; chartArea: { top: any; right: any; bottom: any; left: any; width: any; height: any; }; }) {
        const { ctx, chartArea: { top, right, bottom, left, width, height } } = chart;
        ctx.save();
        ctx.font = '40px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'white';
        ctx.fillText('90%', width / 2, top + (height / 2));
      }
    };
    Chart.defaults.font.size = 20;
    const type = new Chart(this.ctx, {
      type: 'doughnut',
      data: {

        datasets: [{
          label: 'TypeScript',
          data: [90, 10],
          backgroundColor: [
            'rgb(142, 47, 252)',
            'rgba(0, 0, 0, 0.1)',
          ],
          borderWidth: 0
        }]
      },
      options: {
        plugins: {
          title: {
              display: true,
              text: 'TypeScript',
          },
          tooltip: {
            enabled: false
          }
        }
      },
      plugins: [counter]
    });
  }

  html() {
    this.ctx = document.getElementById('html');
    const counter = {
      id: 'counter',
      beforeDraw(chart: { ctx: any; chartArea: { top: any; right: any; bottom: any; left: any; width: any; height: any; }; }) {
        const { ctx, chartArea: { top, right, bottom, left, width, height } } = chart;
        ctx.save();
        ctx.font = '40px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'white';
        ctx.fillText('100%', width / 2, top + (height / 2));
      }
    };
    Chart.defaults.font.size = 20;
    const html = new Chart(this.ctx, {
      type: 'doughnut',
      data: {

        datasets: [{
          label: 'HTML',
          data: [100, 0],
          backgroundColor: [
            'rgb(118, 0, 255)',
            'rgba(0, 0, 0, 0.1)',
          ],
          borderWidth: 0
        }]
      },
      options: {
        plugins: {
          title: {
              display: true,
              text: 'HTML',
          },
          tooltip: {
            enabled: false
          }
        }
      },
      plugins: [counter]
    });
  }

  css() {
    this.ctx = document.getElementById('css');
    const counter = {
      id: 'counter',
      beforeDraw(chart: { ctx: any; chartArea: { top: any; right: any; bottom: any; left: any; width: any; height: any; }; }) {
        const { ctx, chartArea: { top, right, bottom, left, width, height } } = chart;
        ctx.save();
        ctx.font = '40px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'white';
        ctx.fillText('100%', width / 2, top + (height / 2));
      }
    };
    Chart.defaults.font.size = 20;
    const css = new Chart(this.ctx, {
      type: 'doughnut',
      data: {

        datasets: [{
          label: 'CSS',
          data: [100, 0],
          backgroundColor: [
            'rgb(118, 0, 255)',
            'rgba(0, 0, 0, 0.1)',
          ],
          borderWidth: 0
        }]
      },
      options: {
        plugins: {
          title: {
              display: true,
              text: 'CSS',
          },
          tooltip: {
            enabled: false
          }
        }
      },
      plugins: [counter]
    });
  }

  vscode() {
    this.ctx = document.getElementById('vscode');
    const counter = {
      id: 'counter',
      beforeDraw(chart: { ctx: any; chartArea: { top: any; right: any; bottom: any; left: any; width: any; height: any; }; }) {
        const { ctx, chartArea: { top, right, bottom, left, width, height } } = chart;
        ctx.save();
        ctx.font = '40px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'white';
        ctx.fillText('100%', width / 2, top + (height / 2));
      }
    };
    Chart.defaults.font.size = 20;
    const vscode = new Chart(this.ctx, {
      type: 'doughnut',
      data: {
        datasets: [{
          label: 'VS Code',
          data: [100, 0],
          backgroundColor: [
            'rgb(118, 0, 255)',
            'rgba(0, 0, 0, 0.1)',
          ],
          borderWidth: 0
        }]
      },
      options: {
        plugins: {
          title: {
              display: true,
              text: 'VS Code',
          },
          tooltip: {
            enabled: false
          }
        }
      },
      plugins: [counter]
    });
  }

  github() {
    this.ctx = document.getElementById('github');
    const counter = {
      id: 'counter',
      beforeDraw(chart: { ctx: any; chartArea: { top: any; right: any; bottom: any; left: any; width: any; height: any; }; }) {
        const { ctx, chartArea: { top, right, bottom, left, width, height } } = chart;
        ctx.save();
        ctx.font = '40px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'white';
        ctx.fillText('100%', width / 2, top + (height / 2));
      }
    };
    Chart.defaults.font.size = 20;
    const github = new Chart(this.ctx, {
      type: 'doughnut',
      data: {

        datasets: [{
          label: 'github',
          data: [100, 0],
          backgroundColor: [
            'rgb(118, 0, 255)',
            'rgba(0, 0, 0, 0.1)',
          ],
          borderWidth: 0
        }]
      },
      options: {
        plugins: {
          title: {
              display: true,
              text: 'Github',
          },
          tooltip: {
            enabled: false
          }
        }
      },
      plugins: [counter]
    });
  }

  mongodb() {
    this.ctx = document.getElementById('mongoDB');
    const counter = {
      id: 'counter',
      beforeDraw(chart: { ctx: any; chartArea: { top: any; right: any; bottom: any; left: any; width: any; height: any; }; }) {
        const { ctx, chartArea: { top, right, bottom, left, width, height } } = chart;
        ctx.save();
        ctx.font = '40px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'white';
        ctx.fillText('80%', width / 2, top + (height / 2));
      }
    };
    Chart.defaults.font.size = 20;
    const mongoDB = new Chart(this.ctx, {
      type: 'doughnut',
      data: {

        datasets: [{
          label: 'MongoDB',
          data: [80, 20],
          backgroundColor: [
            'rgb(172, 50, 253)',
            'rgba(0, 0, 0, 0.1)',
          ],
          borderWidth: 0
        }]
      },
      options: {
        plugins: {
          title: {
              display: true,
              text: 'MongoDB',
          },
          tooltip: {
            enabled: false
          }
        }
      },
      plugins: [counter]
    });
  }

  confluence() {
    this.ctx = document.getElementById('confluence');
    const counter = {
      id: 'counter',
      beforeDraw(chart: { ctx: any; chartArea: { top: any; right: any; bottom: any; left: any; width: any; height: any; }; }) {
        const { ctx, chartArea: { top, right, bottom, left, width, height } } = chart;
        ctx.save();
        ctx.font = '40px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'white';
        ctx.fillText('80%', width / 2, top + (height / 2));
      }
    };
    Chart.defaults.font.size = 20;
    const confluence = new Chart(this.ctx, {
      type: 'doughnut',
      data: {

        datasets: [{
          label: 'Confluence',
          data: [80, 20],
          backgroundColor: [
            'rgb(172, 50, 253)',
            'rgba(0, 0, 0, 0.1)',
          ],
          borderWidth: 0
        }]
      },
      options: {
        plugins: {
          title: {
              display: true,
              text: 'Confluence',
          },
          tooltip: {
            enabled: false
          }
        }
      },
      plugins: [counter]
    });
  }

  jira() {
    this.ctx = document.getElementById('jira');
    const counter = {
      id: 'counter',
      beforeDraw(chart: { ctx: any; chartArea: { top: any; right: any; bottom: any; left: any; width: any; height: any; }; }) {
        const { ctx, chartArea: { top, right, bottom, left, width, height } } = chart;
        ctx.save();
        ctx.font = '40px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'white';
        ctx.fillText('70%', width / 2, top + (height / 2));
      }
    };
    Chart.defaults.font.size = 20;
    const jira = new Chart(this.ctx, {
      type: 'doughnut',
      data: {

        datasets: [{
          label: 'Jira',
          data: [70, 30],
          backgroundColor: [
            'rgb(246, 63, 247)',
            'rgba(0, 0, 0, 0.1)',
          ],
          borderWidth: 0
        }]
      },
      options: {
        plugins: {
          title: {
              display: true,
              text: 'Jira',
          },
          tooltip: {
            enabled: false
          }
        }
      },
      plugins: [counter]
    });
  }

  aws() {
    this.ctx = document.getElementById('aws');
    const counter = {
      id: 'counter',
      beforeDraw(chart: { ctx: any; chartArea: { top: any; right: any; bottom: any; left: any; width: any; height: any; }; }) {
        const { ctx, chartArea: { top, right, bottom, left, width, height } } = chart;
        ctx.save();
        ctx.font = '40px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'white';
        ctx.fillText('50%', width / 2, top + (height / 2));
      }
    };
    Chart.defaults.font.size = 20;
    const aws = new Chart(this.ctx, {
      type: 'doughnut',
      data: {

        datasets: [{
          label: 'AWS',
          data: [50, 50],
          backgroundColor: [
            'rgb(254, 106, 133)',
            'rgba(0, 0, 0, 0.1)',
          ],
          borderWidth: 0
        }]
      },
      options: {
        plugins: {
          title: {
              display: true,
              text: 'AWS',
          },
          tooltip: {
            enabled: false
          }
        }
      },
      plugins: [counter]
    });
  }
}
