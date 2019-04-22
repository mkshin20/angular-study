import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // hero라는 프로퍼티를 추가하고
  // 이 값을 'Mikyeong'이라는 값으로 할당
  //hero = 'Mikyeong';


  // hero 프로퍼티를 Hero 타입으로 리팩토링
  // id를 1로, name을 'Mikyeong'으로 초기함
    hero: Hero = {
    id : 1,
    name : 'Mikyeong'
  };
  

  constructor() { }

  ngOnInit() {
  }

}
