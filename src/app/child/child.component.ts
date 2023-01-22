import { Component } from '@angular/core';
import { DataService} from "../data.service";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers:[DataService]
})
export class ChildComponent {

  title="tables"
  stores:any =[];

  constructor(private logger:DataService)
{}

getit(){
  this.logger.get().subscribe(
    (data)=> this.stores=data
  );

}
}
