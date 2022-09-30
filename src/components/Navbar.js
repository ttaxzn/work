import React from "react"
import {Link, useMatch, useResolvedPath} from "react-router-dom"
import './Navbar.css'
import logo from './logo1.svg'

var colors = ["#554348", "#514355", "#474355", "#434a55"];
var currentIndex = 0;

setInterval(function() {
	document.body.style.cssText = "background-color: " + colors[currentIndex];
	currentIndex++;
	if (currentIndex === undefined || currentIndex >= colors.length) {
		currentIndex = 0;
	}
}, 1000);

export default function Navbar(){
    return (
    <nav className="nav">
    <Link to="/">
        <div class="zoom">
        <img src={logo}width="150px" height="150px" alt=""/>
        </div>
        </Link>

    <ul>
        <li>
        <CustomLink to="/work">Work</CustomLink>
        </li>
        <li>
        <CustomLink to="/about">About
            </CustomLink>        
        </li>
        <li>
        <CustomLink to="/contact">Contact
            </CustomLink>
        </li>
    </ul>
    </nav>
    )
}

function CustomLink({to, children, ...props}) {
const resolvedPath = useResolvedPath(to)
const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}