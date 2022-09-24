import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import offers from '../../assets/offers.json';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
})
export class OffersComponent implements OnInit {
  offerList: any;
  joiningStatus = [
    { joining: 'thumb_up' },
    { declined: 'thumb_down' },
    { rejected: 'do_not_disturb_on' },
  ];
  selectedJoiningStatus = '';
  constructor(private dataService: DataService) {}

  getOffers() {
    this.offerList = offers;
  }
  activeItem: string;

  setActiveItem(page: string) {
    this.activeItem = page;
    this.getJoiningStatusIcon(this.activeItem);
  }
  getJoiningStatusIcon(item) {
    this.selectedJoiningStatus = this.joiningStatus.filter((x) => x[item])[0][
      item
    ];
    return this.selectedJoiningStatus;
  }
  ngOnInit() {
    this.getOffers();
  }
}
