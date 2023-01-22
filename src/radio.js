import React, { Component } from 'react';
import { PropTypes } from 'prop-types';


class Filter extends Component {
    constructor(props) {
        super(props);
        this.state={
            selected:' name'
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit =this.onSubmit.bind(this);
      
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(sortedBy) {
        return (e) => {
            e.preventDefault();
            const { sorter } = this.props;
            sorter(e.target.value);
        };
    }

    render() {
      
        
        return (
            <form>
            <div>
                <input 
                type="radio"  
                value="name"
                checked={this.state.sort ==='name'}
                onChange={this.handleChange} 
                
                 name='sort' />
                <label>Name</label>
                <input type="radio" 
                checked={this.state.sort ==='bday'} 
                onChange={this.handleChange} 
                value="bday"  
                name='sort'/>
                <label>Age</label>
            </div>
            <button value={this.state.sort} onClick={this.onSubmit(this.state.selected)}>sort</button>
            </form>
        );
    }
}

export default Filter;

