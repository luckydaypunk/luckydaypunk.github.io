import React from 'react'
import Container from 'react-bootstrap/Container'
import './Projects.css'
import SNS from './SNS'
import Weather from './Weather.js'
import PromisesTables from './PromisesTables.js'

export default class Projects extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Container>
                    <span>Feel free to check out my Github repos, works on Glitch and Codepen profile below!</span>
                    <SNS />
                </Container>
                <div className='weatherBox'>
                    <Weather />
                </div>
                <PromisesTables />
            </div>
        )
    }
}