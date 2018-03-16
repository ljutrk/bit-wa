
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
        const firstThree = email.substring(0,3) + "...@";
        const afterMonkey = email.split('@')[1]
        const hiddenEmail = firstThree + afterMonkey;  
        return hiddenEmail;
        
    }
    // console.log(hideEmailAddress());
    

    const getDateOfBirth = () => {
        const date = new Date(dob);

        return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
    }

    return (
        <ul className="collection">
            <li className="collection-item avatar" >
                <img src={picture.thumbnail} alt="" className="circle" />
                <span className="title">Name: {name}</span>
                <p> email: {hideEmailAddress()} <br />
                    Date Of Birth: {getDateOfBirth()}
                </p>
            </li>
        </ul>
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
            <UsersList data={users} />
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