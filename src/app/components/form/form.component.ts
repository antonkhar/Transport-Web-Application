import { Component, OnInit } from '@angular/core';
import { concatWith } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  ngOnInit(): void {
    const a = document.querySelectorAll('input');
    const button = document.querySelector('.registerbtn');
    let chekOne = false;
    let chekTwo = false;

    a[0].addEventListener('input', function(evt) {
      if(a[0].value != ''){
        chekOne = true;
      }
      else{
        chekOne = false;
      }
      if(chekOne == true && chekTwo == true){
        button!.classList.remove('disable');
      }
      });

      a[1].addEventListener('input', function(evt) {
        if(a[1].value != ''){
          chekTwo = true;
        }
        else{
          chekTwo = false;
        }
        if(chekOne == true && chekTwo == true){
          button!.classList.remove('disable');
        }
        });

    // button!.addEventListener('click', function(event){
    //   disable(button,a);
    // });
  }

}

function disable(button: Element | null, a: NodeListOf<HTMLInputElement>){
  let chek = true;
  for(let i = 0; i < a.length; i++){
    if(a[i].value == ''){
      button!.classList.add('disable');
      chek = false;
    }
  }
  if(chek == true){
    button!.classList.remove('disable');
  }
}