import './Header.css'
import React from 'react'

export default props =>
    <header className="header">
        <h1 className="header">
            <i className={`fa fa-${props.icon}`}></i>{props.title}
        </h1>
    <p className="lead text-muted">{props.subtitle}</p>
    </header>

