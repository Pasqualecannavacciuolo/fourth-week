import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.css']
})
export class MoneyComponent implements OnInit {
  conditionA = true;
  conditionB = true;
  conditionC = true;
  
  balance: number = 1000;

  constructor() { }

  ngOnInit(): void {
  }

  

}
