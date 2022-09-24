import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import offers from '../../assets/offers.json';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
})
export class OffersComponent implements OnInit {
  candidateDetails: any;
  prospectsList: any;
  droppedList: any;
  offerList: any;

  constructor(private dataService: DataService) {}

  getOffers() {
    this.offerList = offers;
    // this.dataService.getCandidte().subscribe((candidate) => {
    //   this.candidateDetail = candidate;
    // });
  }

  ngOnInit() {
    this.getOffers();
  }
}
