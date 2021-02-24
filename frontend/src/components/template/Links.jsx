import './Links.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <React.Fragment>
        <Link to='/'>
            <i className="fa fa-home fa-2x"></i>
        </Link>
        <hr />
        <Link to="/chat">
            <i className="fa fa-paper-plane fa-2x"></i>
        </Link>
        <hr />
        <Link to="#">
            <i className="fa fa-flash fa-2x"></i>
        </Link>
        <hr />
        <Link to="#" >
            <i className="fa fa-user-o fa-2x"></i>
        </Link>
        <hr />
        <Link to="#">
            <i className="fa fa-picture-o fa-2x"></i>
        </Link>
        <hr />
        <Link to="#">
            <i className="fa fa-bar-chart fa-2x"></i>
        </Link>
        <hr />
        <Link to="/profile">
            <i className="fa fa-address-card-o fa-2x"></i>
        </Link>
    </React.Fragment>

