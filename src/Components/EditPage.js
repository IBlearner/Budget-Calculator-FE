import React, { Component } from 'react';

class EditPage extends Component {
    state = {
        name: "",
        price: "",
        description: "",
        date: ""
    }

    componentDidMount() {
        
    }

    render() { 
        return (
            <>
                <h1>Hello! This is the home page</h1>
                <input onChange={(e) => {this.handleChange(e)}} name="name" value={this.state.name} placeholder="Enter item name"></input>
                <input onChange={(e) => {this.handleChange(e)}} name="price" value={this.state.price} placeholder="Enter the amt you spent"></input>
                <input onChange={(e) => {this.handleChange(e)}} name="description" value={this.state.description} placeholder="Enter a description if applicable"></input>
                <input onChange={(e) => {this.handleChange(e)}} name="date" value={this.state.date} placeholder="Enter date (dd-mm-yy)"></input>
                <button form="form" type="submit" onClick={this.handleClick}>Add new</button>
            </>
        );
    }
}
 
export default EditPage;