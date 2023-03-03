import React from "react";
import "./scss/app.scss"

import {Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";


function App() {

    const [items, setItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        fetch('https://63b883b66f4d5660c6d87d71.mockapi.io/items')
            .then((res) => res.json())
            .then((arr) => {
                setIsLoading(false)
                setItems(arr)
            })
    }, [])

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">

                    <Routes>
                        <Route path="/" element={ <Home/> }/>
                        <Route path="/cart" element={ <Cart/> }/>
                        <Route path="*" element={ <NotFound/> }/>
                    </Routes>

                </div>
            </div>
        </div>
    );
}

export default App;
