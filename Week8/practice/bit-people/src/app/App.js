import React, { Component } from 'react';
import { getUsers } from '../services/UserService';
import { Header } from './partials/Header'
import { Footer } from './partials/Footer'
import { UserList } from './components/UserList';
import { Search } from './partials/Search';
import { Cube } from './partials/Cube/Cube';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isViewList: JSON.parse(localStorage.getItem("isListView")),
      searchValue: "",
      isLoading: true,
      aboutPageState: ""
    }
  }

  componentWillMount = () => {
    if (localStorage.getItem("isListView") === null) {
      localStorage.setItem("isListView", true);
      this.setState({ isViewList: JSON.parse(localStorage.getItem("isListView")) });
    }
    this.setState({ aboutPageState: true })

  }

  componentDidMount() {
    getUsers()
      .then(users => {
        this.setState({ data: users, isLoading: false });
      });
    console.log(this.state.aboutPageState);
    const goToAbout = () => {
      this.setState({ aboutPageState: false })

    }
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

  searchValue = (value) => {
    this.setState({ searchValue: value.toLowerCase() })
  }

  searchedUsers = () => {
    return this.state.data.filter(user => {
      return user.fullName.includes(this.state.searchValue);
    })
  }

  showCube() {
    if (this.state.isLoading) {
      return <Cube />
    } else {
      return <UserList data={this.state.data} isViewList={this.state.isViewList} searchedUsers={this.searchedUsers} />
    }
  }



  render() {
    return (
      <div>
        <Header onClick={this.onClickChangeView} isViewList={this.state.isViewList} refresh={this.refresh} goToAbout={this.goToAbout} aboutPageState={this.state.aboutPageState} />
        <Search searchValue={this.searchValue} />
        {this.showCube()}

        <Footer />
      </div>
    );
  }
}

export { App };
