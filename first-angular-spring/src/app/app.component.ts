import { Component, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './model/student';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-angular-spring';

  displayedColumns: string[] = ['Name', 'LastName', 'Country', 'Age'];

  dataSource: Student[] = [];

  @Input() italianStudents: Student[] = [];
  showITAStudents = false;
  italianBtnClicked = false;

  showOldest = false;
  oldestStudent!: Student;

  constructor(private http: HttpClient) {
    this.getAll();
  }

  getAll() {
    this.http
      .get<Student[]>('http://localhost:8080/api/v1/studentsList')
      .subscribe((result) => this.dataSource = result);
  }

  printItalians() {
    this.italianBtnClicked = true;
    this.showITAStudents = true;
    this.http
      .get<Student[]>('http://localhost:8080/api/v1/italianStudents')
      .subscribe((result) => this.italianStudents = result);
  }

  printOldest() {
    this.showOldest = true;
    this.http
      .get<Student>('http://localhost:8080/api/v1/oldestStudent')
      .subscribe((result) => this.oldestStudent = result);
  }

  hideCard() {
    this.showOldest = false;
  }
  
}
