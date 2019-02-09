import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTools, faHome, faNewspaper } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

export default class Navbar1 extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Chris Greene</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link><Link to='/'><FontAwesomeIcon icon={faHome} /> Home</Link></Nav.Link>
                    <Nav.Link><Link to='/projects'><FontAwesomeIcon icon={faTools} /> Projects</Link></Nav.Link>
                    <Nav.Link><Link to='/articles'><FontAwesomeIcon icon={faNewspaper} /> Articles</Link></Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}