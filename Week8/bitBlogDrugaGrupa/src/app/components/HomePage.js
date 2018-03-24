import React from "react";
import { PostCard } from "./PostCard";
import { servicePost } from '../../services/ServicePost'

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { posts: [] }
    }



    componentDidMount() {
        servicePost.fetchPosts()
            .then(posts => this.setState({ posts }))
    }

    render() {
        return (
            <div className="row">
                {this.state.posts.map((post, index) => <PostCard key={index} post={post} />)}
            </div>
        )
    }
}


export { HomePage }