import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../../entities/Post';
import { servicePost } from '../../services/ServicePost';

class newPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleInputValue: "",
            textInputValue: "",
            authorInputValue: "",
            // newPostsArray: JSON.parse(localStorage.getItem("post")) || []
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

    buttonClickHandler = () => {
        console.log(this.state);

        servicePost.createNewPost(this.state.titleInputValue, this.state.textInputValue, this.state.authorInputValue)
        // .then(response => console.log(response));

        // const newPost = {
        //     title: this.state.titleInputValue,
        //     userId: "",
        //     id: "",
        //     body: this.state.textInputValue
        // }

        // this.setState({ newPosts: this.state.newPostsArray.push(newPost) })
        // localStorage.setItem("post", JSON.stringify(this.state.newPostsArray))

    }

    render() {
        return (
            <div className="collection card-panel">
                <form>
                    <label> Post Title
                    <input onChange={this.titleInputChangeHandler} value={this.state.titleInputValue} placeholder="Title" type="text" />
                    </label>

                    <label> Post Text
                    <input onChange={this.textInputChangeHandler} value={this.state.textInputValue} placeholder="Text" type="text" />
                    </label>

                    <label> Post Author
                    <input onChange={this.authorInputChangeHandler} value={this.state.authorInputValue} placeholder="Author ID" type="text" />
                    </label>
                </form>
                <Link to='/'>
                    <button onClick={this.buttonClickHandler} className="btn waves-effect waves-light" type="submit" name="action">Submit
                     <i className="material-icons right">send</i>
                    </button>
                </Link>
            </div>
        );
    }
}


export { newPost };