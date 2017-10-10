import { Injectable } from '@angular/core';
import { StudentPerformance } from './student-performance';


@Injectable()
export class StudentProgressService {
 
  constructor() { }
   
    scoredPoints: number = 0; 
    pointsPossible: number = 0;
    percent: number = 0;
    grade: string;
    studentProgress= {};

    updateStudentProgress(newScore, newPossible){
      this.scoredPoints = this.scoredPoints + newScore;
      this.pointsPossible = this.pointsPossible + newPossible;
      this.percent = this.scoredPoints / this.pointsPossible;
    }
    returnProgress(){
      this.studentProgress = {
        points: this.scoredPoints,
        possible: this.pointsPossible,
        percent: this.percent
      }
      return this.studentProgress;
    }
  }

