import React, { Component } from 'react';

class EditPage extends Component {
    state = {
        item_id: "",
        name: "",
        price: "",
        description: "",
        date: ""
    }

    componentDidMount() {
        const {item_id, name, price, description, date} = this.props.editDetails
        this.setState({item_id: item_id, name: name, price: price, description: description, date: date})
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value}, () => {
            console.log(e.target.value)
        })
    }

    handleClick = () => {
        const {item_id, name, price, description, date} = this.state
        const newObj = {item_id: item_id, name: name, price: price, description: description, date: date}
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