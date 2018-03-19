import React from 'react';
import { Header } from './partials/Header'
import { Footer } from './partials/Footer'
import MainItem from './components/MainItem'
import { userService } from '../services/UserService';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] }
  }

  componentDidMount() {
    
    userService.fetchUsers()
      .then((userList) => {
        console.log(userList);
        
        
        this.setState ({
          data: userList
        })
      })
  }

  render() {

    return (
      <div>
        <Header title="React Users" />
        {/* <Header /> */}
        <MainItem data={this.state.data} />
        <Footer />
      </div>
    )
  }
}


export default App;
