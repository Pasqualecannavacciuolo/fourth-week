import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PrimoEsercizio';

  isHide: boolean = false;

  ngOnInit(): void {
    setTimeout(()=>{
      this.isHide = true;
    }, 2000);
  }
}
