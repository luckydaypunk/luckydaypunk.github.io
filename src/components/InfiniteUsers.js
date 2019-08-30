import React, { Component, Fragment } from "react";
import './InfiniteUsers.css'
import debounce from "lodash.debounce";
import Loading from './Loading.js'

//adapted from https://alligator.io/react/react-infinite-scroll/

export default class InfiniteUsers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      hasMore: true,
      isLoading: false,
      users: [],
    };

    window.onscroll = debounce(() => {
      const {
        loadUsers,
        state: {
          error,
          isLoading,
          hasMore,
        },
      } = this;

      if (error || isLoading || !hasMore) return;

      if (
        window.innerHeight + document.documentElement.scrollTop
        > document.documentElement.offsetHeight -20
      ) {
        loadUsers();
      }
    }, 100);
  }

  componentWillMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    this.setState({ isLoading: true }, async () => {
      try {
        let response = await fetch('https://randomuser.me/api/?results=10')
        let results = await response.json()
        console.log(results)
        const nextUsers = results.results.map(user => ({
          email: user.email,
          name: [this.capitalize(user.name.first), this.capitalize(user.name.last)].join(' '),
          photo: user.picture.medium,
          username: user.login.username,
          uuid: user.login.uuid,
        }));

        this.setState({
          hasMore: (this.state.users.length < 150),
          isLoading: false,
          users: [
            ...this.state.users,
            ...nextUsers,
          ],
        });
      } catch (err) {
        this.setState({
          error: err.message,
          isLoading: false,
         });
      }
    });
  }

capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

  render() {
    return (
      <div>
        <p>User List</p>
        {this.state.users.map(user => (
          <Fragment key={user.username}>
            <hr />
            <div className='userPanel'>
              <img
                alt={user.username}
                src={user.photo}
              />
              <div>
                <p className='usertag'>
                  @{user.username}
                </p>
                <p>{user.name}</p>
                <p>{user.email}</p>
              </div>
            </div>
          </Fragment>
        ))}
        <hr />
        {this.state.error &&
          <div>
            {this.state.error}
          </div>
        }
        {this.state.isLoading &&
          <Loading />
        }
        {!this.state.hasMore &&
          <div>That's all, 150 users? There were more Pokémon than this in 1996...</div>
        }
      </div>
    );
  }
}
