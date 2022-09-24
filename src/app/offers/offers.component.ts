import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import candidates from '../../assets/candidate.json';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
})
export class OffersComponent implements OnInit {
  candidateDetails: any;

  constructor(private dataService: DataService) {}

  getCandidate() {
    this.candidateDetails = candidates;

    // this.dataService.getCandidte().subscribe((candidate) => {
    //   this.candidateDetail = candidate;
    // });
  }

  ngOnInit() {
    this.getCandidate();
  }
}
