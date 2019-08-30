import React from 'react'
import Me from './me.jpg'
import Sayajin from './sayajin_me.jpg'
import './Intro.css'
import SNS from './SNS'
import Container from 'react-bootstrap/Container'

export default class Intro extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ssj: false,
            text: 'Chris is a bilingual, full-stack developer with a passion for automation. He\'s on the verge of writing a script to automate his automation.\
        Upon graduating from Dublin City University with a degree in Translation in 2013, he moved to Japan\
        to work as a Logistics Specialist, managing global trade routes for a major silicon wafer manufacturer. Yes, the not-so-delicious wafers used\
        to make  SSDs, CPUs, and essentially all techonology. After making the move to AWS in\
        2017, he has implemented many new technologies and contributed to numerous apps to increase the productivity of Data Center operations. In his free time, when he\'s not whipping up\
        a nodeJs app, he finds himself clearing out his film backlogue, analyzing the dialogue in the Yakuza video game series or enjoying a nice craft beer.\
        He also can\'t seem to finish any higher than 4th place in Tetris 99...',
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
                        <br />
                        <SNS />
                    </Container>
                </div>
            </div>
        )
    }
}