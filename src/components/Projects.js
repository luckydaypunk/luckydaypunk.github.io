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
                    <span>Check out my profiles below, or jump right into my fully serverless, graphQL and React <a href="https://duirhq879qz5z.cloudfront.net/">marketplace app!</a></span>
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