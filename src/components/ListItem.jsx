import React from "react"
import ItemImg from "./ItemImg"
import ItemContent from "./ItemContent"

const ListItem = ()=> {
    return(
        <div className="media text-muted pt-3">
            <ItemImg />
            <ItemContent />
        </div>
    )
}

export default ListItem