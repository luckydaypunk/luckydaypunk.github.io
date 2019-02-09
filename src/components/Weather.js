import React from 'react'
import Loading from './Loading.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { faSun, faMoon, faUmbrella, faCloud, faMeteor } from '@fortawesome/free-solid-svg-icons'

export default class Weather extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'loading': true,
            'loc': '',
            'temp': '',
            'icon': '',
            'summary': ''
        }
    }
    async componentDidMount() {
        const response = await fetch(`https://secure-coast-75749.herokuapp.com/`)
        const json = await response.json()
        this.setState({
            'loading': false,
            'loc': json.loc,
            'temp': json.temp,
            'icon': json.icon,
            'summary': json.summary
        });
    }

    getIcon(icon) {
        switch (icon) {
            case "clear-day":
                return faSun
            case "clear-night":
                return faMoon
            case "cloudy":
                return faCloud
            case "partly-cloudy-day":
                return faCloud
            default:
                return faMeteor
        }
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.loading === true
                        ? <Loading />
                        : <div>
                            <p>The local temperature in {this.state.loc} is {this.state.temp}&#8451;</p>
                            <div><FontAwesomeIcon icon={this.getIcon(this.state.icon)} /></div>
                            <p>{this.state.summary}</p>
                            <p>Powered by <FontAwesomeIcon icon={faNodeJs} /> on Heroku!</p>
                            <br />
                        </div>}
                </div>
            </div>
        )
    }
}