import React, { Component } from 'react';

class Home extends Component {
    state = {
        data: []
    }

    async componentDidMount() {
        const getData = await this.props.GetData()
        this.setState({data: await getData})
        console.log(this.state.data)
    }

    listForData = (x) => {
        if (x === null) return
        const list = x.map((single, i) => {
            console.log(single)
            return(
                <h1>{single.name}: ${single.price}</h1>
            )
        })
        return list
    }

    render() { 
        return (
            <>
                <h1>Hello! This is the home page</h1>
                <button onClick={() => this.props.GetData()}>Click me dammit</button>
                <button onClick={() => this.props.PostData()}>Add new</button>
                {this.listForData(this.state.data)}
            </>
        );
    }
}
 
export default Home;