import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFileCode } from '@fortawesome/free-regular-svg-icons'
import './SNS.css'

const SNS = () => (
    <div>
        <div className="icons">
            <a href='https://github.com/luckydaypunk'><FontAwesomeIcon icon={faGithubSquare} /></a>
            <a href='https://www.linkedin.com/in/christopher-greene-401270ba/'><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href='https://glitch.com/@luckydaypunk'><FontAwesomeIcon icon={faFileCode} /></a>
        </div>
    </div>
)

export default SNS