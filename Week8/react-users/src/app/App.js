import React from 'react';
import { Header } from './partials/Header';
import { Footer } from './partials/Footer';
import { UserList } from './components/UserList';
import { userService } from '../services/UserService';
import { Search } from './partials/Search';
import { Cube } from './partials/loadingCube/Cube';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isListView: this.getViewFromLocalStorage("isListView"),
      searchValue: "",
      isLoading: true
    }
  }


  componentWillMount() {
    if (this.isViewSet("isListView")) {
      this.setState({ isListView: true })
      localStorage.setItem("isListView", true)
    }

  }

  componentDidMount() {
    this.loadUsers();
   

  }

  onClickChangeView = (event) => {
    event.preventDefault();
    this.setState({
      isListView: !this.state.isListView
    })
    localStorage.setItem("isListView", !this.state.isListView)
  }

  refresh = (event) => {
    event.preventDefault();
    this.loadUsers();

  }

  getViewFromLocalStorage = item => JSON.parse(localStorage.getItem(item))

  isViewSet = item => this.getViewFromLocalStorage(item) === null

  loadUsers = () => {
    userService.fetchUsers()
      .then((userList) => {
        this.setState({
          data: userList,
          isLoading: false

        })
      })

  }

  onSearchValueChange = (value) => {
    this.setState({
      searchValue: value
    });
  }

  getUsers = () => {

    const { data } = this.state;

    return data.filter((user) => {
      return user.name.first.includes(this.state.searchValue)
    });

  }

  showLoading() {
 
    if (this.state.isLoading) {
      return <Cube />
    } else {
      return <UserList data={this.state.data} isListView={this.state.isListView} searchUsers={this.getUsers} />
    }
  }

  render() {

    return (
      <div>
        <Header title="React Users" onClick={this.onClickChangeView} isListView={this.state.isListView} refresh={this.refresh} />
        <Search onSearchValueChange={this.onSearchValueChange} />
        {this.showLoading()}
        <Footer /> 
      </div>
    )
  }
}


export default App;
