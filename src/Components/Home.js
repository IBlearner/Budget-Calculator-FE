import React, { Component } from 'react';

class Home extends Component {
    state = {  }
    render() { 
        return (
            <>
                <h1>Hello! This is the home page</h1>
                <button onClick={() => this.props.GetData()}>Click me dammit</button>
                <button onClick={() => this.props.PostData()}>Add new</button>
            </>
        );
    }
}
 
export default Home;