import { Component, OnInit } from '@angular/core';
import { chinesa } from '../chinesa';

@Component({
  selector: 'app-comida-chinesa',
  templateUrl: './comida-chinesa.component.html',
  styleUrls: ['./comida-chinesa.component.css']
})
export class ComidaChinesaComponent implements OnInit {
  chinesa = chinesa;

  
  constructor() { }

  ngOnInit() {
  }

  share() {
    window.alert('The product has been shared!');
  }

}
