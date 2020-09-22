import React from 'react'
import '../styles/sidebarRow.css'


function SideRow({ selected, Icon, title }) {
    return(
        <div className={`sidebarRow d-flex ${selected && "selected"}`}>
            <Icon className="sidebarRow__icon" /> 
            <h5 className="sidebarRow__title">{ title }</h5>
        </div>
    )
}

export default SideRow