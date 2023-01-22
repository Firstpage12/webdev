import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers:[DataService]
})
export class TableComponent  implements OnInit{

  @Input() files: any;
  file:any=[];
  
  constructor(private logger:DataService){}

  ngOnInit(){
    this.logger.get().subscribe(
      (data)=> this.file=data
      
    );
    
  }
}
