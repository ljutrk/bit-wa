import React, { Component } from 'react';
import { getUsers } from '../services/UserService';
import { Header } from './partials/Header'
import { Footer } from './partials/Footer'
import { UserList } from './components/UserList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isViewList: JSON.parse(localStorage.getItem("isListView")),
      search: ""
    }
  }

  componentWillMount = () => {
    if (localStorage.getItem("isListView") === null) {
      localStorage.setItem("isListView", true);
      this.setState({ isViewList: JSON.parse(localStorage.getItem("isListView")) });
    }
  }

  componentDidMount() {
    getUsers()
      .then(users => {
        this.setState({ data: users });
      });

  }

  onClickChangeView = (event) => {
    event.preventDefault();
    localStorage.setItem("isListView", !this.state.isViewList);
    this.setState({ isViewList: !this.state.isViewList });
  }

  refresh = (event) => {
    event.preventDefault();
    getUsers()
      .then(users => {
        this.setState({ data: users });
      });
  }

  searchValueChange = (event) => {
      this.setState({ search: event.target.value })
      // console.log(event.target.value);
      
      this.state.data = this.state.data.filter(user => {
        if (user.firstName.includes(event.target.value)) {
          return user
        }
      })



    // getUsers()

    //   .then(users => {
    //     return users.filter(user => {
    //       if (user.firstName.includes(event.target.value)) {
    //         return user
    //       }
    //     })
    //   })
    //   .then(users => {
    //     this.setState({ data: users });
    //   });

    // console.log(event.target.value);



  }

  render() {
    return (
      <div>
        <Header onClick={this.onClickChangeView} isViewList={this.state.isViewList} refresh={this.refresh} searchValueChange={this.searchValueChange} searchValue={this.state.search} />
        <UserList data={this.state.data} isViewList={this.state.isViewList} />
        <Footer />
      </div>
    );
  }
}

export { App };
