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

    const PostData = async (x) => {
        x = JSON.stringify(x)
        console.log(x)
        const response = await fetch (`${url}/items`, {
            method: "POST",
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
            body: x
        })
        if (!response.ok) console.log(`An error has occured: ${response.status} - ${response.statusText}`)
    }
    
    return (
        <div className="App">
            <Home GetData={GetData} PostData={PostData}/>
        </div>
    );
}

export default App;
