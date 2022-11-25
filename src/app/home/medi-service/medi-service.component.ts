import { Component, OnInit } from '@angular/core';
import { medi_service } from '../interface/service';

@Component({
  selector: 'app-medi-service',
  templateUrl: './medi-service.component.html',
  styleUrls: ['./medi-service.component.css'],
})
export class MediServiceComponent implements OnInit {
  medi_service = medi_service;
  constructor() {

  }

  ngOnInit(): void {}
}
