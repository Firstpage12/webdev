import { Component, Directive } from '@angular/core';
import { ConsversorService } from './consversor.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'Cuurency Calculator';
  head='learning';
  currjson:any =[];

  base='INR';
  cont2='INR';
  result:string='1';
  pre:number=1;
  

  changebase(a:string){
    this.base=a;
    
  }
  tocountry(b:string){
    this.cont2=b;
   
  }
  constructor(private currrency:ConsversorService){}
  

  convert(cur:string){
    

    this.currrency.getcurrencydata(this.base).subscribe(data=>{
      this.currjson=JSON.stringify(data)
      this.currjson=JSON.parse(this.currjson);
      
      if(this.cont2=='USD'){
        this.pre=this.currjson.rates.USD*Number(cur);
        this.result=String(this.pre);
        

      }
      if(this.cont2=='INR'){
        this.pre=this.currjson.rates.INR*Number(cur);
        this.result=String(this.pre);

      }
      if(this.cont2=='EUR'){
        this.pre=this.currjson.rates.EUR*Number(cur);
        this.result=String(this.pre);

      }
      if(this.cont2=='GBP'){
        this.pre=this.currjson.rates.GBP*Number(cur);
        this.result=String(this.pre);

      }
      if(this.cont2=='JPY'){
        this.pre=this.currjson.rates.JPY*Number(cur);
        this.result=String(this.pre);

      }

    })

  }
}
