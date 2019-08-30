import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFileCode } from '@fortawesome/free-regular-svg-icons'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './SNS.css'

const SNS = () => (
    <div>
        <div>
        	<Container>
	        	<Row>
	        		<Col xs={4} md={4} xl={4} className="icons">
			            <a href='https://github.com/luckydaypunk'><FontAwesomeIcon icon={faGithubSquare} /></a>
			        </Col>
			        <Col xs={4} md={4} xl={4} className="icons">
			            <a href='https://www.linkedin.com/in/christopher-greene-401270ba/'><FontAwesomeIcon icon={faLinkedin} /></a>
			        </Col>
			        <Col xs={4} md={4} xl={4} className="icons">
			            <a href='https://glitch.com/@luckydaypunk'><FontAwesomeIcon icon={faFileCode} /></a>
			        </Col>
	            </Row>
        	</Container>
        </div>
    </div>
)

export default SNS