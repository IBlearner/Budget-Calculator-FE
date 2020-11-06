import './App.css';
import Home from "./Components/Home"

const url = "http://localhost:3333"

function App() {

    const GetData = async () => {
        const response = await fetch(`${url}/items`, {method: "GET"})
        if (!response.ok) console.log(`An error has occured: ${response.status} - ${response.statusText}`)
        const data = await response.json()
        return data
    }

    const PostData = async () => {
        var x = "bob"
        x = JSON.stringify(x)
        const response = await fetch (`${url}/items/add`, {
            method: "POST",
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
            body: x
        })
        if (!response.ok) console.log(`An error has occured: ${response.status} - ${response.statusText}`)
        console.log(response)
    }

    // (async () => {
    //     const rawResponse = await fetch('https://httpbin.org/post', {
    //       method: 'POST',
    //       headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({a: 1, b: 'Textual content'})
    //     });
    //     const content = await rawResponse.json();
      
    //     console.log(content);
    // })
    
    return (
        <div className="App">
            <Home GetData={GetData} PostData={PostData}/>
        </div>
    );
}

export default App;
