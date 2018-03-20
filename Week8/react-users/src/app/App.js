import React from 'react';
import { Header } from './partials/Header'
import { Footer } from './partials/Footer'
import { UserList } from './components/UserList'
import { userService } from '../services/UserService';
import {setLocalStorage,getLocalStorage, getValue} from "../services/StorageService"




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isListView: !!getLocalStorage("isListView")
    }
  }
  
  componentWillMount() {
    setLocalStorage("isListView", `${this.state.isListView}`)

  }

  componentDidMount() {

    userService.fetchUsers()
      .then((userList) => {
        console.log(userList);


        this.setState({
          data: userList
        })
      })


  }

  onClickChangeView = (event) => {
    event.preventDefault();
    this.setState({
      isListView: !this.state.isListView
    })
    setLocalStorage("isListView", `${!this.state.isListView}`)
  }

  render() {

    return (
      <div>
        <Header title="React Users" onClick={this.onClickChangeView} isListView={this.state.isListView} />
        {/* <Header /> */}
        <UserList data={this.state.data} isListView={this.state.isListView} />
        <Footer />
      </div>
    )
  }
}


export default App;
