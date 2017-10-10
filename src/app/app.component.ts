import { Component } from '@angular/core';
import { CalculateAssignmentsService } from './calculate-assignments.service'
import { StudentProgressService } from './student-progress.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Student Progress'
  studentName = 'Bob Smith';
  addAssignmentName;
  addScoredPoints;
  addPointsPossible;
  addNewAssignment = {addAssignmentName: null, addScoredPoints: null,addPointsPossible: null, addPercentage: null}
  assignmentArray = [];
  progressObject = {};
  constructor(private addAssignmentService: CalculateAssignmentsService, private progress: StudentProgressService){}
    addAssignment(){
      this.assignmentArray = this.addAssignmentService.getAssignmentRowList(this.addNewAssignment.addAssignmentName,this.addNewAssignment.addScoredPoints,this.addNewAssignment.addPointsPossible,this.addNewAssignment.addPercentage )
      this.progress.updateStudentProgress(this.addNewAssignment.addScoredPoints,this.addNewAssignment.addPointsPossible);
      this.progressObject = this.progress.returnProgress();
    }
  }

