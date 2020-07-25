import React from "react"
import ListItem from "./ListItem"
import dishes from "../dishes"

const createItem = (dish)=> {
    return(
        <ListItem itemName={dish.dish} itemIngrid={dish.ingrids} itemPrice={dish.price}/>
    )
}

const App = ()=> {
    return (
        <main role="main" className="container">
            <div className="my-3 p-3 bg-white rounded shadow-sm">
                <h6 className="border-bottom border-gray pb-2 mb-0">Top Menu</h6>
                {dishes.map(createItem)}
            </div>
        </main>
    )
}

export default App

  

