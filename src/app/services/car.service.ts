import { Injectable } from '@angular/core';
import { Transport } from 'src/app/classes/transport';
import { CARS } from 'src/app/classes/mock-car';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  getCars(): Observable<Transport[]> {
    const cars = of(CARS);
    return cars;
  }
  constructor() { }
}
