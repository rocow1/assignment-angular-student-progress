import { Injectable } from '@angular/core';
import {StudentAssignment} from './student-assignment'


@Injectable()
export class CalculateAssignmentsService {

  constructor() { }
percentage; 
studentAssingments = [];
  getAssignmentRowList(assignmentName: string, scoredPoints: number, pointsPossible: number, percentage: number) {
    let studentAssingments: StudentAssignment[];
    percentage = scoredPoints / pointsPossible;

    

    
    this.studentAssingments.push({assignmentName: assignmentName,
    scoredPoints: scoredPoints,
    pointsPossible: pointsPossible,
   percentage: percentage});
    return this.studentAssingments;  
  }
}