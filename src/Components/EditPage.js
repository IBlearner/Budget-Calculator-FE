import React, { Component } from 'react';

class EditPage extends Component {
    state = {
        name: "",
        price: "",
        description: "",
        date: ""
    }

    componentDidMount() {
        const props = this.props.editDetails
        this.setState({name: props.name, price: props.price, description: props.description, date: props.date})
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value}, () => {
            console.log(e.target.value)
        })
    }

    handleClick = () => {
        const {name, price, description, date} = this.state
        const newObj = {name: name, price: price, description: description, date: date}
        this.props.UpdateItem(newObj)
    }

    render() { 
        return (
            <>
                <h1>Modify this item</h1>
                <button onClick={() => this.props.GoToHomePage()}>Home</button>
                <h1>{this.props.editDetails.name}</h1>
                <input onChange={(e) => {this.handleChange(e)}} name="name" value={this.state.name} placeholder="Enter item name"></input>
                <input onChange={(e) => {this.handleChange(e)}} name="price" value={this.state.price} placeholder="Enter the amt you spent"></input>
                <input onChange={(e) => {this.handleChange(e)}} name="description" value={this.state.description} placeholder="Enter a description if applicable"></input>
                <input onChange={(e) => {this.handleChange(e)}} name="date" value={this.state.date} placeholder="Enter date (dd-mm-yy)"></input>
                <button form="form" type="submit" onClick={this.handleClick}>Apply</button>
            </>
        );
    }
}
 
export default EditPage;