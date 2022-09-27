import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import candidates from '../../assets/candidate.json';

@Component({
  selector: 'app-prospects',
  templateUrl: './prospects.component.html',
  styleUrls: ['./prospects.component.css'],
})
export class ProspectsComponent implements OnInit {
  candidateDetails: any;
  prospectsList: any;
  droppedList: any;

  constructor() {}

  getCandidate() {
    this.candidateDetails = candidates;
    this.prospectsList = this.candidateDetails.filter(
      (x) => x.isDropped == false
    );
    this.droppedList = this.candidateDetails.filter((x) => x.isDropped == true);
  }

  ngOnInit() {
    this.getCandidate();
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.prospectsList, event.previousIndex, event.currentIndex);
    // alert('Order changed');
  }
}
