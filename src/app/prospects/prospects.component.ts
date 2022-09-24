import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import candidates from '../../assets/candidate.json';

@Component({
  selector: 'app-prospects',
  templateUrl: './prospects.component.html',
  styleUrls: ['./prospects.component.css']
})
export class ProspectsComponent implements OnInit {
  candidateDetails: any;
  prospectsList: any;
  droppedList: any;

  constructor(private dataService: DataService) {}

  getCandidate() {
    this.candidateDetails = candidates;
    this.prospectsList = this.candidateDetails.filter(
      (x) => x.isDropped == false
    );
    this.droppedList = this.candidateDetails.filter((x) => x.isDropped == true);

    // this.dataService.getCandidte().subscribe((candidate) => {
    //   this.candidateDetail = candidate;
    // });
  }

  ngOnInit() {
    this.getCandidate();
  }
}