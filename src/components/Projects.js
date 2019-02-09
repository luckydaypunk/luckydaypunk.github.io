import React from 'react'
import Container from 'react-bootstrap/Container'
import { faGithubSquare, faCodepen } from '@fortawesome/free-brands-svg-icons'
import { faFileCode } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Projects.css'
import Weather from './Weather.js'

export default class Projects extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <div className='weatherBox'>
                    <Weather />
                </div>
                <br />
                <br />
                <Container>
                    <span>Feel free to check out my Github repos, works on Glitch and Codepen profile below!</span>
                    <div className='projectIcons'>
                        <div>
                            <a href='https://github.com/luckydaypunk'><FontAwesomeIcon icon={faGithubSquare} /></a>
                            <div><a href='https://github.com/luckydaypunk'>Github</a></div>
                        </div>
                        <div>
                            <a href='https://glitch.com/@luckydaypunk'><FontAwesomeIcon icon={faFileCode} /></a>
                            <div><a href='https://glitch.com/@luckydaypunk'>Glitch</a></div>
                        </div>
                        <div>
                            <a href='https://codepen.io/luckydaypunk/'><FontAwesomeIcon icon={faCodepen} /></a>
                            <div><a href='https://codepen.io/luckydaypunk/'>CodePen</a></div>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}