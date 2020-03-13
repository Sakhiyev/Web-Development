import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  
  product: any;
  city: string;
  name: string;
  model: string;
  kuz: string;
  color: string;
  probeg: string;
  Korobka: string;
  rule: string;
  Year: number; 
  Ob: number;
  money: number;
  credit: number;
  Anes: string;
  Op: string='газ-бензин, КПП автомат,внедорожник, белый, металлик, люк, ветровики, рейлинги, спойлер,...';


  constructor() { }

  ngOnInit(): void {
    this.Anes="http://web.whatsapp.com/send?text=<https://kolesa.kz/a/show/102189627>"
    this.city='Нур-Султан';
    this.kuz='Внедорожник';
    this.name='Lexus';
    this.rule='Слева';
    this.model='LX470';
    this.color='Черный';
    this.probeg='240000km';
    this.rule='Слева';
    this.Korobka='Механика';
    this.Year=2007;
    this.Ob=4.7;
    this.money=9200000;
    this.credit=227388;
    this.Op='У машины Казахстанские номера, но я с машиной в Грузии нахожусь.';
  
  }
  
  carSelect(carName){
    if(carName=='LX470'){
      this.Anes="http://web.whatsapp.com/send?text=<https://kolesa.kz/a/show/102189627>"
    this.city='Нур-Султан';
    this.kuz='Внедорожник';
    this.name='Lexus';
    this.rule='Слева';
    this.model='LX470';
    this.color='Черный';
    this.probeg='240000km';
    this.rule='Слева';
    this.Korobka='Механика'
    this.Year=2007;
    this.Ob=4.7;
    this.money=9200000;
    this.credit=227388;
  } else if (carName=='GS300') {
    this.Anes="http://web.whatsapp.com/send?text=<https://kolesa.kz/a/show/102189627>"
    this.city='Шымкент';
    this.name='Lexus';
    this.model='GS300';
    this.kuz='Седан';
    this.color='Черный';
    this.probeg='100000km';
    this.rule='Слева';
    this.Korobka='Автомат'
    this.Year=2011;
    this.Ob=3.0;
    this.money=6000000;
    this.credit=187966;
    this.Op='фиолетовый, ксенон, противотуманки, корректор фар, обогрев зеркал';
  } else {
    this.Anes="http://web.whatsapp.com/send?text=<https://kolesa.kz/a/show/102189627>"
    this.city='Almaty';
    this.name='Land Rover';
    this.model='Range Rover';
    this.kuz='Внедорожник';
    this.color='Черный';
    this.probeg='500000km';
    this.rule='Слева';
    this.Korobka='Типтроник'
    this.Year=2010;
    this.Ob=5.0;
    this.money=5000000;
    this.credit=120561;
    this.Op='литые диски, тонировка, люк , ксенон, противотуманки, корректор фар, обогрев зеркал, дневные ходовые огни , комбинированный , CD-чейнджер, MP3, USB, DVD-чейнджер , полный электропакет, память сидений, центрозамок, память руля, климат-контроль';
  }
}

}
