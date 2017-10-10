import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalculateAssignmentsService } from './calculate-assignments.service'
import { StudentProgressService } from './student-progress.service';
import { GradePipe } from './grade.pipe'


@NgModule({
  declarations: [
    AppComponent,
    GradePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CalculateAssignmentsService, StudentProgressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
