import { Transport } from 'src/app/classes/transport'

export const CARS: Transport[] = [

    {
        id: 0,
        power: 50,
        setting: {
            isNotBusy: true,
            isNotBroken: true,
            isNotBlocked: true
        },
        positionX: 250,
        positionY: 300,

        print(ID, POWER, setting, POSITIONX, POSITIONY) {

        },

        randLeftAdd(range, endX){
            const rand = (Math.random() * range * 2) - range;
            console.log('range: ' + range);
            console.log('rand: ' + rand);
            console.log('endX: ' + endX);
            console.log('positionX: ' + this.positionX);
            if(Math.random() < 0.3 && this.positionX + rand < endX && this.positionX + rand > 0){
                return rand
            }
            else{
              return this.positionX
            }
        },

        randTopAdd(range, endY){
            const rand = (Math.random() * range * 2) - range;
            if(Math.random() < 0.3 && this.positionY + rand < endY && this.positionY + rand > 0){
                return rand
            }
            else{
              return this.positionY
            }
        },

        func(e, randTopAdd, randLeftAdd){
            for(var i = 0; i < e.length; i++){
                const a = randLeftAdd;
                const b = randTopAdd;
                e[i].style.transform = 'translate('+ a + ','+ b +')';
              }
        }

    },

    {
        id: 1,
        power: 78,
        setting: {
            isNotBusy: true,
            isNotBroken: true,
            isNotBlocked: true
        },
        positionX: 100,
        positionY: 100,

        print(ID, POWER, setting, POSITIONX, POSITIONY) {
        },

        randLeftAdd(range, endX){
            const rand = (Math.random() * range * 2) - range;
            if(Math.random() < 0.3 && this.positionX + rand < endX && this.positionX + rand > 0){
                return rand
            }
            else{
              return this.positionX
            }
        },

        randTopAdd(range, endY){
            const rand = (Math.random() * range * 2) - range;
            if(Math.random() < 0.3 && this.positionY + rand < endY && this.positionY + rand > 0){
                return rand
            }
            else{
              return this.positionY
            }
        },

        func(e, randTopAdd, randLeftAdd){
            for(var i = 0; i < e.length; i++){
                const a = randLeftAdd;
                const b = randTopAdd;
                e[i].style.transform = 'translate('+ a + ','+ b +')';
              }
        }

    },

    {
        id: 2,
        power: 23,
        setting: {
            isNotBusy: true,
            isNotBroken: true,
            isNotBlocked: true
        },
        positionX: 800,
        positionY: 400,

        print(ID, POWER, setting, POSITIONX, POSITIONY) {
        },

        randLeftAdd(range, endX){
            const rand = (Math.random() * range * 2) - range;
            if(Math.random() < 0.3 && this.positionX + rand < endX && this.positionX + rand > 0){
                return rand
            }
            else{
              return this.positionX
            }
        },

        randTopAdd(range, endY){
            const rand = (Math.random() * range * 2) - range;
            if(Math.random() < 0.3 && this.positionY + rand < endY && this.positionY + rand > 0){
                return rand
            }
            else{
              return this.positionY
            }
        },

        func(e, randTopAdd, randLeftAdd){
            for(var i = 0; i < e.length; i++){
                const a = randLeftAdd;
                const b = randTopAdd;
                e[i].style.transform = 'translate('+ a + ','+ b +')';
              }
        }

    },

    {
        id: 3,
        power: 100,
        setting: {
            isNotBusy: true,
            isNotBroken: true,
            isNotBlocked: true
        },
        positionX: 600,
        positionY: 100,

        print(ID, POWER, setting, POSITIONX, POSITIONY) {
        },

        randLeftAdd(range, endX){
            const rand = (Math.random() * range * 2) - range;
            if(Math.random() < 0.3 && this.positionX + rand < endX && this.positionX + rand > 0){
                return rand
            }
            else{
              return this.positionX
            }
        },

        randTopAdd(range, endY){
            const rand = (Math.random() * range * 2) - range;
            if(Math.random() < 0.3 && this.positionY + rand < endY && this.positionY + rand > 0){
                return rand
            }
            else{
              return this.positionY
            }
        },

        func(e, randTopAdd, randLeftAdd){
            for(var i = 0; i < e.length; i++){
                const a = randLeftAdd;
                const b = randTopAdd;
                e[i].style.transform = 'translate('+ a + ','+ b +')';
              }
        }

    }

];