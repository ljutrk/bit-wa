import React from 'react';
import { BackToPosts } from '../partials/BackToPosts';
import { Link } from 'react-router-dom';
import { servicePost } from '../../services/ServicePost';
import { serviceAuthors } from '../../services/ServiceAuthors';
import { Square } from '../partials/loadingSquare/Square';

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
        if (this.props.match.params.id < 101) {
            this.fetchData(this.props.match.params.id);
        }
    }

    componentWillReceiveProps(nextProps) {
        this.fetchData(nextProps.match.params.id);
    }

    fetchData(postID) {

        Promise.resolve(
            servicePost.fetchSinglePost(postID)
                .then(post => {
                    this.setState({ thisPost: post });
                    return this.state.thisPost.userId;
                })
                .then(userID => {
                    servicePost.fetchPostsFromOneAuthor(userID)
                        .then(posts => this.setState({ posts }));
                    serviceAuthors.fetchAuthor(userID)
                        .then(author => {
                            this.setState({ postAuthor: author });
                            this.setState({ isLoading: false });
                        })

                })
        )
    }

    render() {
        if (this.props.match.params.id > 100) {
            return (
                <div>
                    <BackToPosts />
                    <h3>fake api doesnt support adding new posts, sorry, no details for the posts you created. They are only stored in local sorage to be shown on homepage!</h3>
                </div>
            );
        }

        if (this.state.isLoading) {
            return Square();
        }
        const authorID = `/author/${this.state.postAuthor.id}`
        return (
            <div className="container ">
                <div className="col-8 offset-2 card-panel ">
                    <BackToPosts />
                    <h2 className="center-align">{this.state.thisPost.title}</h2>
                    <Link to={authorID}>
                        <h3 className="center-align">{this.state.postAuthor.name}</h3></Link>
                    <p>{this.state.thisPost.body}</p>
                    <hr />
                    <h3>{this.state.posts.length - 1} more posts from same author</h3>
                    <ul>
                        {this.state.posts.map((post, index) => {
                            const postLink = `/post/${post.id}`;
                            if (post.id === parseInt(this.props.match.params.id, 10)) {
                                return "";
                            }
                            return <li key={index}><Link key={index} to={postLink} >{post.title}</Link></li>
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}
export { SinglePostPage };