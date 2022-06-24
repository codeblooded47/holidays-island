import { Component, OnInit } from '@angular/core';
import { OffersService } from '../services/offers.service';

import { jsPDF } from 'jspdf';
import { PDFDocument } from 'pdf-lib';
import * as jspdf from 'jspdf';

import html2canvas from 'html2canvas';
import domtoimage from 'dom-to-image-more';
import pdfMake from 'pdfmake/build/pdfmake';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { CheckLoginService } from '../dashboard/services/check-login.service';
import FileSaver from 'file-saver';

@Component({
  selector: 'app-offers-table',
  templateUrl: './offers-table.component.html',
  styleUrls: ['./offers-table.component.css'],
})
export class OffersTableComponent implements OnInit {
  d: any[] = [];
  companyName;
  id: number;
  private sub: any;
  showDownload: boolean = true;
  totalprintpagecount!: number;
  pdfName: string;
  constructor(
    private offerService: OffersService,
    private route: ActivatedRoute,
    private _DomSanitizationService: DomSanitizer,
    private checkLogin: CheckLoginService // private checkLogin: CheckLoginService
  ) {}
  sanitizeUrl(url: any) {
    return this._DomSanitizationService.bypassSecurityTrustUrl(url);
  }
  ngOnInit(): void {
    // this.getOffers();

    this.sub = this.route.params.subscribe((params) => {
      console.log('shoowing download route', params['download']);
      if (params['download'] === 'download') {
        this.showDownload = false;
      }

      this.id = params['id'];
      this.getOfferById(params['id']);
    });
  }

  getOfferById(id: any) {
    this.offerService.getOfferById(id).subscribe((data: any) => {
      console.log('offer by id', data);

      let count = 0;
      data.Offers.forEach((ele: any) => {
        count++;
        ele.Hotels.forEach((val: any) => {
          count++;
        });
      });
      count++;
      this.totalprintpagecount = count;
      this.pdfName = data.name;
      console.log('count:', this.pdfName);

      this.d.push(data.Offers);
      this.companyName = data.name;
    });
  }
  getOffers() {
    this.offerService.getOffer().subscribe((data: any) => {
      console.log('offer page data', data);
      // console.log(data[0].Offers);
      // console.log(data.length);
      // this.companyName = data[0].name;
      // console.log(this.d);

      for (let i = 0; i < data.length; i++) {
        // console.log(data[i].Offers)
        this.d.push(data[i].Offers);
        console.log(this.d);
        // this.d[i]=data[i].Offers;
      }
    });
  }
  print() {
    this.offerService.downloadPackage(this.id).subscribe((data: any) => {
      // var blob = new Blob([data], { type: 'application/pdf' });
      // FileSaver.saveAs(blob, 'filename');
    });
    // window.print();
  }
}
