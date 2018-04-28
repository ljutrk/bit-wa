import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { servicePost } from '../../services/ServicePost';

class newPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleInputValue: "",
            textInputValue: "",
            authorInputValue: "",
            newPostsArray: JSON.parse(localStorage.getItem("newPosts")) || []
        }
    }

    titleInputChangeHandler = (event) => {
        this.setState({ titleInputValue: event.target.value });
    }

    textInputChangeHandler = (event) => {
        this.setState({ textInputValue: event.target.value });
    }

    authorInputChangeHandler = (event) => {
        this.setState({ authorInputValue: event.target.value });
    }

    createNewPost = () => {
        servicePost.createNewPost(this.state.titleInputValue, this.state.textInputValue, this.state.authorInputValue)
            .then(response => {
                let postID = 0;
                if (localStorage.getItem("newPosts") !== null) {
                    postID = JSON.parse(localStorage.getItem("newPosts")).length + response.id;
                } else {
                    postID = response.id;
                }
                const newPost = {
                    title: response.title,
                    userId: parseInt(response.userId, 10),
                    id: postID,
                    body: response.body
                }
                this.setState({ newPosts: this.state.newPostsArray.push(newPost) });
                localStorage.setItem("newPosts", JSON.stringify(this.state.newPostsArray));
                this.props.history.push("/");
            });

    }

    render() {
        return (
            <div className="collection card-panel">
                <p>Create New Post!</p>
                <input onChange={this.titleInputChangeHandler} value={this.state.titleInputValue} placeholder="Title" type="text" />
                <input onChange={this.textInputChangeHandler} value={this.state.textInputValue} placeholder="Text" type="text" />
                <input onChange={this.authorInputChangeHandler} value={this.state.authorInputValue} placeholder="Author ID" type="text" />
                <button onClick={this.createNewPost} className="btn-newPost btn waves-effect waves-light" name="newPost">POST
                    </button>
                <Link to='/'>
                    <button className="btn-newPost btn waves-effect waves-light right">cancel
                    </button>
                </Link>
            </div>
        );
    }
}


export default withRouter(newPost);
