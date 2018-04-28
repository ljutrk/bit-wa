import React from "react";
import { PostCard } from "./PostCard";
import { servicePost } from '../../services/ServicePost';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            newPosts: []
        }
    }

    componentDidMount() {
        if (localStorage.getItem("newPosts") !== null) {
            this.setState({ newPosts: servicePost.fetchNewPosts(JSON.parse(localStorage.getItem("newPosts"))) });
        }
        servicePost.fetchPosts()
            .then(posts => {
                const newArr = [...this.state.newPosts.reverse(), ...posts.reverse()];
                this.setState({ posts: newArr });
            });
    }

    addPostsToHomePage() {
        return this.state.posts.map((post, index) => {
            if (index < 20) {
                return <PostCard key={index} post={post} />;
            }
            return "";
        })
    }

    render() {
        return (
            <div className="row">
                {this.addPostsToHomePage()}
            </div>
        );
    }
}

export { HomePage };