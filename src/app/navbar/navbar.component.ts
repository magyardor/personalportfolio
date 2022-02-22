import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

declare var require: any
const FileSaver = require('file-saver');
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent{
  @ViewChild('sidenav') sidenav!: MatSidenav;

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  downloadPdf() {
    const pdfUrl = './assets/Magyar_Dorina_CV.pdf';
    const pdfName = 'Magyar_Dorina_CV';
    FileSaver.saveAs(pdfUrl, pdfName);
  }

}
