
const Footer = () => {
const currentYear = new Date().getFullYear();

    return (
        <footer className="page-footer">
            <div className="footer-copyright">
                © {currentYear} Copyright Text
          </div>
        </footer>
    )
}

const Header = ({title}) => {

    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center">{title}</a>
            </div>
        </nav>
    )
}

const User = (props) => {
    const { name, email, dob, picture } = props;
    // console.log(name);

    const hideEmailAddress = () => {
        const firstThree = email.substring(0,3) + "...";
        const afterMonkey = email.split('@')[1]
        const lastTwo = email.split('@')[0].slice(-2) + "@";
        const hiddenEmail = firstThree + lastTwo + afterMonkey;  
        return hiddenEmail;
        
    }
    // console.log(hideEmailAddress())

    const getDateOfBirth = () => {
        const date = new Date(dob);

        return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
    }

    // return (
    //     <ul className="collection">
    //         <li className="collection-item avatar" >
    //             <img src={picture.thumbnail} alt="" className="circle" />
    //             <span className="title">Name: {name}</span>
    //             <p> email: {hideEmailAddress()} <br />
    //                 Date Of Birth: {getDateOfBirth()}
    //             </p>
    //         </li>
    //     </ul>
    // )

    return (
<div>
    <div className="col s12 m4">
      <div className="card">
        <div className="card-image">
          <img src={picture.large} />
          <span className="card-title">{name}</span>
        </div>
        <div className="card-content">
          <p>Email: {hideEmailAddress()} <br />Date of Birth: {getDateOfBirth()}</p>
        </div>
      </div>
    </div>
  </div>
    )
}

const UsersList = ({ data }) => {

    return (
        <div className="userList">
            {data.map((user, index) => <User key={index} name={user.name.first} email={user.email} dob={user.dob} picture={user.picture} />)}
        </div>
    )
}

const Main = ({ data }) => {

    return (
        <div className="container">
        <div className="row">
            <UsersList data={users} />
        </div>
        </div>
    )
}

const App = ({ data }) => {

    return (
        <div>
            <Header title="React Users" />
            <Main data={users} />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App data={users} />, document.querySelector('.root'));