import { Component } from '@angular/core';

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrls: ['./calculo.component.css']
})
export class CalculoComponent {
  
  pessoas: number = 0;
  gstbanho: number = 0;
  comodos: number = 0;
  gstcomodos: number = 0;
  maqroupa: boolean = false;
  gstmaq: number = 0;
  secroupa: boolean = false;
  gstsec: number = 0;
  tv:number = 0;
  gsttv: number = 0;
  comp:number = 0;
  gstcomp: number = 0;
  energia:number = 0;
  kwh: number =0;
  resp: number = 0;
  preco: string ="";
  consumo: string ="";

  calculo(){

    this.gstbanho = this.pessoas * 22.5;
    this.gstcomodos = this.comodos * 6.00;
    this.gsttv = this.tv * 12.45;
    this.gstcomp = this.comp * 15.12;
    if(this.maqroupa == true){
      this.gstmaq =  1.76;
    }
    if(this.secroupa == true){
      this.gstsec = 14.92;
    }

    this.kwh = this.gstbanho + this.gsttv + this.gstcomp + this.gstmaq + this.gstsec;
    this.resp = this.kwh * this.energia;
    this.consumo = this.kwh + "Kwh";
    this.preco = "R$" + this.resp.toFixed(2);

  }

}
