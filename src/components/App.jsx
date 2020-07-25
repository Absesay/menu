import React from "react"
import ListItem from "./ListItem"
import dishes from "../dishes"

const App = ()=> {
    return (
        <main role="main" className="container">
            <div className="my-3 p-3 bg-white rounded shadow-sm">
            <h6 className="border-bottom border-gray pb-2 mb-0">Top Menu</h6>
                <ListItem itemName={dishes[0].dish} itemIngrid={dishes[0].ingrids} itemPrice={dishes[0].price}/>
                <ListItem itemName={dishes[1].dish} itemIngrid={dishes[1].ingrids} itemPrice={dishes[1].price}/>
                <ListItem itemName={dishes[2].dish} itemIngrid={dishes[2].ingrids} itemPrice={dishes[2].price}/>
                <ListItem itemName={dishes[3].dish} itemIngrid={dishes[3].ingrids} itemPrice={dishes[3].price}/>
                <ListItem itemName={dishes[4].dish} itemIngrid={dishes[4].ingrids} itemPrice={dishes[4].price}/>
            </div>
        </main>
    )
}

export default App

  

