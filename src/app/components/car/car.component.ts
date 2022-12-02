import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { Transport } from 'src/app/classes/transport';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit { 

  constructor(private carservice: CarService) { }
  inf = false;
  cars: Transport[] = [];
  id?: number;


  getCars(): void {
    this.carservice.getCars()
        .subscribe(cars => this.cars = cars);
  }

  moveCars(range: number, endX: number, endY: number): void{
    for(let i = 0; i < this.cars.length; i++){
      let rand = (Math.random() * range * 2) - range;
      if(Math.random() < 0.1 && this.cars[i].positionY + rand < endY && this.cars[i].positionY + rand > 0){
        this.cars[i].positionY = this.cars[i].positionY + rand
      }
      rand = (Math.random() * range * 2) - range;
      if(Math.random() < 0.1 && this.cars[i].positionX + rand < endX && this.cars[i].positionX + rand > 0){
        this.cars[i].positionX = this.cars[i].positionX + rand
      }
    }
  }

  toogle(id: number) {
    this.getId(id);
    this.chekInfo();
  }

  getId(id:number){
    this.id = id;
  }

  chekInfo(){
    this.inf = !this.inf
  }

  ngOnInit(): void {
    this.getCars();
    setInterval(() =>{
      this.moveCars(100, 1700, 650);
    }, 2000);
  }
}

