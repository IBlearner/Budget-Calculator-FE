import React, { Component } from 'react';

class Home extends Component {
    state = {
        itemData: [],
        name: "",
        price: "",
        description: ""
    }

    async componentDidMount() {
        this.GetItemData()
    }

    GetItemData = async () => {
        const data = await this.props.GetData()
        this.setState({itemData: await data})
    }

    listForData = (x) => {
        if (x === null) return
        const list = x.map((single, i) => {
            return(
                <div>
                    <h1>{single.name}: ${single.price}</h1>
                    <button onClick={() => this.deleteItem(single)}>Delete</button>
                </div>
            )
        })
        return list
    }

    accumTotal = (x) => {
        let total = 0
        for (let i = 0; i < x.length; i++) {
            total += x[i].price
        }
        return(
            <h2>The total you've spent so far is: ${total}</h2>
        )
    }

    addItem = async () => {
        const name = this.state.name
        const price = this.state.price
        const description = this.state.description
        const newObj = {"name": name, "price": price, "description": description}
        await this.props.PostItem(newObj)
        this.GetItemData()
    }

    deleteItem = async (x) => {
        const newObj = {"item_id": x.item_id}
        await this.props.DeleteItem(newObj)
        this.GetItemData()
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value}, () => {
            //code here is triggered AFTER the state is set. current value.
            //console.log(e.target.value)
        })
    }

    handleClick = e => {
        e.preventDefault()
        this.addItem()
    }

    render() { 
        return (
            <>
                <h1>Hello! This is the home page</h1>
                <input onChange={(e) => {this.handleChange(e)}} name="name" value={this.state.name} placeholder="Enter item name"></input>
                <input onChange={(e) => {this.handleChange(e)}} name="price" placeholder="Enter the amt you spent"></input>
                <input onChange={(e) => {this.handleChange(e)}} name="description" placeholder="Enter a description if applicable"></input>
                <button form="form" type="submit" onClick={this.handleClick}>Add new</button>
                {this.listForData(this.state.itemData)}
                {this.accumTotal(this.state.itemData)}
            </>
        );
    }
}
 
export default Home;