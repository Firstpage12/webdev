
import React, { Component } from 'react';
import Filter from './radio';
import Table from './table';


class App extends Component {
  constructor() {
    super();
    this.state = {
      
    };
    this.sort = this.sort.bind(this);
  }

  sort(filter) {
    if (filter === "name") {
      this.setState({ sortedBy: "name" });
    } else {
      this.setState({ sortedBy: "bday" });
    }
  }

  render() {
    return (
      <div className="container-fluid">
        
        
        <Table sortedBy={this.state.sortedBy}></Table>
        <br></br>
        <p>how do you want to sort???</p>
        <Filter sorter={this.sort} sortedBy={this.state.sortedBy}></Filter>
      </div>
    );
  }
}

export default App;
