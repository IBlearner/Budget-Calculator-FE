import React, { Component } from 'react';

class Home extends Component {
    state = {
        itemData: [],
        name: "",
        price: "",
        description: ""
    }

    async componentDidMount() {
        const getData = await this.props.GetData()
        this.setState({itemData: await getData})
        console.log(this.state.itemData)
    }

    listForData = (x) => {
        if (x === null) return
        const list = x.map((single, i) => {
            return(
                <h1>{single.name}: ${single.price}</h1>
            )
        })
        return list
    }

    addItem = () => {
        const name = this.state.name
        const price = this.state.price
        const description = this.state.description
        const newObj = {"name": name, "price": price, "description": description}
        this.props.PostData(newObj)
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value}, () => {
            console.log(e.target.value)
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
                <button onClick={() => this.props.GetData()}>Click me dammit</button>
                    <input onChange={(e) => {this.handleChange(e)}} name="name" value={this.state.name} placeholder="Enter item name"></input>
                    <input onChange={(e) => {this.handleChange(e)}} name="price" placeholder="Enter the amt you spent"></input>
                    <input onChange={(e) => {this.handleChange(e)}} name="description" placeholder="Enter a description if applicable"></input>
                <button form="form" type="submit" onClick={this.handleClick}>Add new</button>
                {this.listForData(this.state.itemData)}
            </>
        );
    }
}
 
export default Home;