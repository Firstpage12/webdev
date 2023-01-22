import { Component } from 'react';
import './App.css';
import data from './bday.json'
// import Radio from './radio';


class Table extends Component {


    render(){

      const { sortedBy } = this.props;
        if (sortedBy === "name") {
   
            data.sort(function (a, b) {
                let personA = a.name.toLowerCase();
                let personB = b.name.toLowerCase();
                return (personA < personB) ? -1 : (personA > personB) ? 1 : 0;
            });
        } else if(sortedBy==="bday") {
            
            data.sort(function (a, b) {
              if(b.bday<a.bday) return -1;
              if(b.bday>a.bday) return 1;
              return 0;
            });
            
        }

    

  return (
    <div className="App">
      <h1>Bday Sort</h1>  
    
    <table >  
      
      <thead>  
          <tr>  
             
            <th>Name</th>  
            <th>Birthday</th>  
            
          </tr>  
      </thead>  
      <tbody>  
        {
          data.map(person=>(
        
        <tr key={person.name}>  
          
          <td>{person.name }</td>  
          <td>{ person.bday }</td>  
         
        </tr>  
          ))}
       
      </tbody>  
      </table>
    </div>
  );
}
}
export default Table;
