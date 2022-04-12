import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Doppio metodo di implementazione
  lista = [    
    { id: 1, content: 'Mela' },    
    { id: 2, content: 'Pera' },    
    { id: 3, content: 'Arancia' },  
    { id: 3, content: 'Cannella' },  
  ];

  lista2 = ["Mela", "Pera", "Arancia", "Cannella"];

  hide: boolean= true;

  submit() {
    alert("Form inviato");
    this.hide = false;
  }

  getClass(): string {
    return 'clicked';
  }
}
