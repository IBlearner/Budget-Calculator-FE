import './App.css';
import Home from "./Components/Home"
import EditPage from "./Components/EditPage"
import { useState } from 'react';

const url = "http://localhost:3333"

function App() {
    const [page, setPage] = useState("home")

    const GetData = async () => {
        const response = await fetch(`${url}/items`, {method: "GET"})
        if (!response.ok) console.log(`An error has occured: ${response.status} - ${response.statusText}`)
        const data = await response.json()
        return data
    }

    const PostItem = async (x) => {
        x = JSON.stringify(x)
        console.log(x)
        const response = await fetch (`${url}/items`, {
            method: "POST",
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
            body: x
        })
        if (!response.ok) return console.log(`An error has occured: ${response.status} - ${response.statusText}`)
    }

    const DeleteItem = async (x) => {
        x = JSON.stringify(x)
        console.log(x)
        const response = await fetch(`${url}/items`, {
            method: "DELETE",
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
            body: x
        })
        if (!response.ok) return console.log(`An error has occured: ${response.status} - ${response.statusText}`)
    }
    
    const PageSwitcher = (x) => {
        switch (x) {
            case "home":
                return <Home GetData={GetData} PostItem={PostItem} DeleteItem={DeleteItem} GoToEditPage={GoToEditPage}/>
            case "edit":
                return <EditPage></EditPage>
            default:
                //in case of error?
        }
    }

    const GoToEditPage = () => {
        setPage("edit")
    }

    return (
        <div className="App">
            {PageSwitcher(page)}
        </div>
    );
}

export default App;
