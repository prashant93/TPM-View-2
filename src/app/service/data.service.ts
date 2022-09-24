import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private http: HttpClient) {}

  getCandidte(): Observable<any> {
    let candidateArray = 'assets/candidate.json';
    return this.http.get(candidateArray);
  }
}
