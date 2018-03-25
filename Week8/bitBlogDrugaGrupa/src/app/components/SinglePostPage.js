import React from "react"
import { BackToPosts } from "../partials/BackToPosts";
import { Link } from "react-router-dom"
import { servicePost } from "../../services/ServicePost";
import { serviceAuthors } from "../../services/ServiceAuthors";
import { Square } from '../partials/loadingSquare/Square'

class SinglePostPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            thisPost: "",
            postAuthor: "",
            isLoading: true,
        }
    }

    componentDidMount() {
        this.fetchData(this.props.match.params.id);
    }

    componentWillReceiveProps(nextProps) {
        this.fetchData(nextProps.match.params.id);
    }

    fetchData(postID) {

        Promise.resolve(
            servicePost.fetchSinglePost(postID)
                .then(post => {
                    this.setState({ thisPost: post })
                    return this.state.thisPost.userId;
                })
                .then(userID => {
                    servicePost.fetchPostsFromOneAuthor(userID)
                        .then(posts => this.setState({ posts }))
                    serviceAuthors.fetchAuthor(userID)
                        .then(author => {
                            this.setState({ postAuthor: author })
                            this.setState({ isLoading: false })
                        })

                })
        )
    }

    render() {

        if (this.state.isLoading) {
            return Square();
        }

        return (
            <div>
                <BackToPosts />
                <h2 className="center-align">{this.state.thisPost.title}</h2>
                <Link to="/authors/:id">{this.state.postAuthor.name}</Link>
                <p>{this.state.thisPost.body}</p>
                <hr />
                <h3>{this.state.posts.length -1} more posts from same author</h3>
                <ul>
                    {this.state.posts.map((post, index) => {
                        const postLink = `/post/${post.id}`;
                        if (index + 1 == this.props.match.params.id) {
                            return
                        }
                        return <li key={index}><Link key={index} to={postLink} >{post.title}</Link></li>
                    })}
                </ul>
            </div>
        )
    }
}
export { SinglePostPage };