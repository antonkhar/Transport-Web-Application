import { Set } from 'src/app/classes/set'

export interface Transport {

  id: number;
  power: number;
  setting: Set;
  positionX: number;
  positionY: number;
  
  print(ID: number, POWER: number, setting: Set, POSITIONX: number, POSITIONY: number): void,
  func(e: NodeListOf<HTMLElement>, sL: string, sT: string): void,
  randLeftAdd(range: number, endX: number): number
  randTopAdd(range: number, endY: number): number

}
