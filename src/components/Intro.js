import React from 'react'
import Me from './me.jpg'
import Sayajin from './sayajin_me.jpg'
import './Intro.css'
import Container from 'react-bootstrap/Container'

export default class Intro extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ssj: false,
            text: 'Chris is a bilingual, full-stack developer with a current mission of bringing core coding principals to front-end web-apps.\
        (\'cmon, nobody likes maintaining messy Javascript...). Upon graduating from Dublin City University with a degree in Translation in 2013, he moved to Japan\
        to work as a Logistics Specialist, managing global trade routes for the second largest silicon wafer manufacturer in the world. After making the move to AWS in\
        2017, he has implemented many new technologies and contributed to numerous apps to increase the productivity of Data Center operations. In his free time, when he\'s not whipping up\
        a nodeJs app, he finds himself clearing out his film backlogue, analyzing the dialogue in the Yakuza video game series or enjoying a nice craft beer.',
            expanded: false,
        }
        this.handleTruncate = this.handleTruncate.bind(this)
        this.transform = this.transform.bind(this)
    }

    transform() {
        this.setState({ ssj: !this.state.ssj })
    }

    handleTruncate() {
        this.setState({
            expanded: !this.state.expanded
        });
    }

    truncate(source, size) {
        return source.length > size ? source.slice(0, size - 1) : source;
    }


    render() {
        return (
            <div className='photos'>
                <div>
                    <Container>
                        <img onClick={this.transform.bind(this)} className='myPhoto' src={this.state.ssj ? Sayajin : Me} alt="Chris" />
                        <h2>Welcome!</h2>
                        <text>{this.state.expanded ? this.state.text : this.truncate(this.state.text, this.state.text.substr(200).indexOf(' ') + 201)}</text>
                        {<span className='readMore' onClick={this.handleTruncate}>{this.state.expanded ? ' ...Show less' : ' ...Read more'}</span>}
                    </Container>
                </div>
            </div>
        )
    }
}