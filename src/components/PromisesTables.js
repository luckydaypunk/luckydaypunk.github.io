import React, { Component } from "react";
import Button from 'react-bootstrap/Button'
import Loading from './Loading.js'
import Performance from './Performance.js'

export default class PromisesTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      error: false,
      rowsLength: 5,
      rowsContent: [],
      url: 'https://official-joke-api.appspot.com/random_joke',
      start: null,
      end: null
    }
    this.promiseJokes = this.promiseJokes.bind(this)
  }

  loadQuestions = () => {
    this.setState();
  }

  createTable = () => {
    let table = []
    table.push(<tr><th>Joke</th><th>PunchLine</th></tr>)
    for (let i = 0; i < this.state.rowsLength; i++) {
      table.push(<tr><td> </td><td> </td></tr>)
    }
    return table
  }

  tableScroll = () => {
    let table = document.getElementById('tableContainer')
    table.scrollIntoView({behavior: "smooth", block: "end"})
  }

  promiseJokes = async () =>{
    this.setState({
      error: false,
      display: false,
      start: performance.now(),
      end: null
    })

    document.querySelectorAll('#jokeTable tr td').forEach((e) => {e.textContent = ''})

    let finishedPromises = []

    for (let i = 0; i < this.state.rowsLength; i++) {

      //traditional promise
      fetch(this.state.url).then(res => res.json()).then((joke) => {
        document.querySelectorAll('#jokeTable tr')[i + 1].innerHTML = '<td>' + joke.setup + '</td><td>' + joke.punchline + '</td>'
        finishedPromises.push(i);
        this.setState({
          display: true,
          end: finishedPromises.length === this.state.rowsLength ? performance.now() : null
        })
        this.tableScroll();
      }).catch((err) => { this.setState({
        error: true,
        display: false
      }) })

      //await will block a for loop, thus outer function, but will not block a function alone
      // try {
      //   let response = await fetch(this.state.url)
      //   let joke = await response.json()
      //   document.querySelectorAll('#jokeTable tr')[i + 1].innerHTML = '<td>' + joke.setup + '</td><td>' + joke.punchline + '</td>'
      // } catch (err) {
      //   this.setState({error: true})
      // }
    }
  }

  promiseAllJokes = async () =>{
    this.setState({
      isLoading: true,
      error: false,
      display: false,
      start: performance.now(),
      end: null
    })
    let promises = []
    try{
      for (let i = 0; i < this.state.rowsLength; i++) {
        promises.push(fetch(this.state.url))
      }
      Promise.all(promises)
        .then(responses => responses)
        .then(responses => Promise.all(responses.map(r => r.json())))
        .then(users => users.forEach((joke,index) => {
          document.querySelectorAll('#jokeTable tr')[index + 1].innerHTML = '<td>' + joke.setup + '</td><td>' + joke.punchline + '</td>'
        })).then(()=>{        
          this.setState({
            isLoading: false,
            display: true,
            end: performance.now()
          })
          this.tableScroll();
        })
    } catch (err) {
      this.setState({error: true})
    }
  }

  render() {
    return (
      <div id='tableContainer'>
        <h2>Joke Table</h2>
        <p> Rest API calls to show the difference between Promise and Promise.all.<br />Try them out below! Promise.all feels cleaner, right?</p>
        {this.state.isLoading === true ? <Loading /> : <br />}
        {this.state.error === true ? <p>Api limit reached...</p> : <br />}
          <div>
              <Button variant="primary" onClick={this.promiseJokes}>
                Promise
              </Button>
              <Button variant="danger" onClick={this.promiseAllJokes}>
                Promise.all
              </Button>
              <div>
                {this.state.end === null ? <br /> : <Performance start={this.state.start} end={this.state.end} />}
                <table className={this.state.display ? '' : 'd-none'}>
                  <tbody id="jokeTable">
                    {this.createTable()}
                  </tbody>
                </table>
              </div>
          </div>
      </div>
    );
  }
}
