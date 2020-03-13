import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  city: string;
  name: string;
  model: string;
  color: string;
  probeg: string;
  Korobka: string;
  rule: string;
  Year: number; 
  Ob: number;
  money: number;
  credit: number;
  Op: string='газ-бензин, КПП автомат,внедорожник, белый, металлик, люк, ветровики, рейлинги, спойлер,...';

  constructor() { }

  ngOnInit(): void {
    this.city='Нур-Султан';
    this.name='Lexus';
    this.model='LX470';
    this.color='black';
    this.probeg='240000km';
    this.rule='Слева';
    this.Korobka='Механика'
    this.Year=2007;
    this.Ob=4.7;
    this.money=9200000;
    this.Op;
    this.credit=227388;
  }
  carSelect(carName){
    if(carName=='LX470'){
    this.city='Нур-Султан';
    this.name='Lexus';
    this.model='LX470';
    this.color='black';
    this.probeg='240000km';
    this.rule='Слева';
    this.Korobka='Механика'
    this.Year=2007;
    this.Ob=4.7;
    this.money=9200000;
    this.credit=227388;
  } else if (carName=='GS300') {
    this.city='Шымкент';
    this.name='Lexus';
    this.model='GS300';
    this.color='black';
    this.probeg='100000km';
    this.rule='Слева';
    this.Korobka='Автомат'
    this.Year=2011;
    this.Ob=3.0;
    this.money=6000000;
    this.credit=187966;
    this.Op='фиолетовый, ксенон, противотуманки, корректор фар, обогрев зерка...';
  } else {
    this.city='Almaty';
    this.name='Land Rover';
    this.model='Range Rover';
    this.color='black';
    this.probeg='500000km';
    this.rule='Слева';
    this.Korobka='Типтроник'
    this.Year=2010;
    this.Ob=5.0;
    this.money=5000000;
    this.credit=120561;
    this.Op='У машины Казахстанские номера, но я с машиной в Грузии нахожусь. Для про...';
  }
}
}
