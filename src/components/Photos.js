import React from 'react'
import Coffee from './coffee.jpg'
import LondonBus from './LondonBus.JPG'
import Turing from './turing.jpg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import './Photos.css'

export default class Photos extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
            invertedCoffee: false,
            invertedTuring: false,
            invertedLondon: false,
        }
        this.invert = this.invert.bind(this)
    }

    invert(key) {
        this.setState({[key]: !this.state[key] })
    }

	render() {
        return (
		    <div>
		    <br/>
		        <Container className='PhotographyDiv'>
		        	<Row>
			        	<Col md={12}>
			        		<div className='photographyText'>I like playing with cameras too...</div>
			        	</Col>
		        		<Col xs={12} md={4}>
			        		<Image className={`photography ${this.state.invertedCoffee ? 'inverted' : 'normal'}`} onClick={()=>this.invert('invertedCoffee')} src={Coffee} alt='Coffee' fluid/>
			        	</Col>
			        	<Col xs={12} md={4}>
			        		<Image className={`photographyVert ${this.state.invertedTuring ? 'inverted' : 'normal'}`} onClick={()=>this.invert('invertedTuring')} src={Turing} alt='Turing Machine' fluid/>
			        	</Col>
			        	<Col xs={12} md={4}>
			        		<Image className={`photography ${this.state.invertedLondon ? 'inverted' : 'normal'}`} onClick={()=>this.invert('invertedLondon')} src={LondonBus} alt='London Bus' fluid/>
			        	</Col>
			        </Row>
		        </Container>
		    </div>
		)
    }
}