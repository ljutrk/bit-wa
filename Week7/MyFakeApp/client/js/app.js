import { createPosts } from "./post.js";
import { createPostDiv } from "./ui.js";

// import {
//     Post
// } from './post.js'

const backendURL = 'http://127.0.0.1:3001/';

const init = () => {

    fetchData()
        .then(posts => {
            createPostsDiv(posts);
        })
        .catch(err => {
            showError()
        })

}

export {
    init
}