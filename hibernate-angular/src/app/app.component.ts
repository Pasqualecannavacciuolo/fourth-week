import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'hibernate-angular';

  panelOpenState = false;

  students: any[] = [];
  department: any;
  

  constructor(private http: HttpClient) {
    this.getAllStudents();
  }
  getAllStudents() {
    this.http
      .get<any[]>('http://localhost:8080/api/v1/')
      .subscribe((result) => this.students = result);
  }

  getDepartment() {
    this.http
      .get<any>('http://localhost:8080/api/v2/departByNameCountry?name=Oxford&country=ENG')
      .subscribe((result) => this.department = result);
  }
  
}
