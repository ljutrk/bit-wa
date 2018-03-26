import React from "react";
import { PostCard } from "./PostCard";
import { servicePost } from '../../services/ServicePost';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            newPosts: []
        }
    }



    componentDidMount() {
        // this.setState({ newPosts: JSON.parse(localStorage.getItem("post")) })

        if (window.localStorage.length !== 0) {
            this.setState({ newPosts: servicePost.fetchNewPosts(JSON.parse(localStorage.getItem("post"))) })
        }
        servicePost.fetchPosts()
            .then(posts => {
                const newArr = [...this.state.newPosts.reverse(), ...posts.reverse()]
                this.setState({ posts: newArr })
            });
        console.log(this.state);

    }

    addPosts() {
        return this.state.posts.map((post, index) => {
            if (index < 20) {
                return <PostCard key={index} post={post} />
            }
        })
    }



    render() {
        console.log(this.state);

        return (
            <div className="row">
                <Link to='/post/new'> zzz </Link>
                {this.addPosts()}
            </div>
        )
    }
}

export { HomePage }