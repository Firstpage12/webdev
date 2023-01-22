import { Component, ViewChild,  } from '@angular/core';
import { DataService } from '../data.service';
import { TableComponent } from '../table/table.component';

import {orderBy} from 'lodash';
@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css'],
  providers:[DataService,TableComponent]
})
export class RadioComponent {

  files:any=[];
  @ViewChild(TableComponent, { static: true })
  child!: TableComponent;
 second(){
  this.logger.get().subscribe(
    (data)=> this.files=data
    
  );
 }
  

  constructor(private logger:DataService){}
  first(){
  

   
    
      var getSelectedValue = document.querySelector( 'input[id="name"]:checked');   
if(getSelectedValue != null) {   
  
this.child.file.sort((a: { name: number; },b: { name: number; }) =>{
  if(b.name<a.name) return 1;
  if(b.name>a.name) return -1;
  return 0;
})
console.log(this.child.file);
  

 
}
  var getSelectedValue = document.querySelector( 'input[id="bday"]:checked');   
  if(getSelectedValue != null) {   
  
    this.child.file.sort((a: { bday:Date; },b: { bday:Date; }) =>{
      if(b.bday<a.bday) return -1;
      if(b.bday>a.bday) return 1;
      return 0;
     
    })
    console.log(this.child.file);
  
    }
  }



  }
