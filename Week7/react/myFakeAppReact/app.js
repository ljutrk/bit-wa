const Header = () => (
    <nav>
        <div className="nav-wrapper">
            <a href="#" className="brand-logo center">Blog</a>
        </div>
    </nav>
)

const PostItem = (props) => {
    const { title, body } = props;

    return (
        <div className="row">
            <div className="col s12">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">{title}</span>
                        <p>{body}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const PostList = ({data}) => {
    // const posts = props.data;

    return (
        <div>
            {posts.map(post => <PostItem key={post.id} title={post.title} body={post.body} />)}
        </div>
    )
}

const Main = ({data}) => {
    // const data = props.data;

    return (
        <div className="container">
            <PostList data={data} />
        </div>
    )
}

const App = ({ data }) =>
    // const { data } = props;
    // const data = props.data;
    (
        <div>
            <Header />
            <Main data={data} />
        </div>
    )

ReactDOM.render(<App data={posts} />, document.querySelector('.root'));