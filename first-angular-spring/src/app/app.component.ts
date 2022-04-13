import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns: string[] = ['Brand', 'Model', 'Color', 'CV'];
  title = 'first-angular-spring';
  cars: any[] = [];

  constructor(private httpClient: HttpClient){
    this.httpClient.get<any>("http://localhost:8080/api/v1/carList").subscribe((e) => {  
    console.log(e)
  this.cars = e
});
  }
}
