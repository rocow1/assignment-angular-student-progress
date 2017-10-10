import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalculateAssignmentsService } from './calculate-assignments.service'
import { StudentProgressService } from './student-progress.service'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CalculateAssignmentsService, StudentProgressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
