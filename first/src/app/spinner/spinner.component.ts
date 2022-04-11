import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit{
  
  isHide: boolean = false;

  ngOnInit(): void {
    setTimeout(()=>{
      this.isHide = true;
    }, 5000);
  }
}