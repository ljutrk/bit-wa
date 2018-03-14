import { createPosts } from "./post.js";
import { createPostDiv } from "./ui.js";

// import {
//     Post
// } from './post.js'

const backendURL = 'http://127.0.0.1:3001/';

const init = () => {
    fetch(backendURL)
        .then((response) => {
            return response.json();
        })
        .then((postList) => {
            console.log(postList);

            console.log(createPosts(postList));
            
            createPosts(postList).forEach((element) => {
                createPostDiv(element);
            })
        
        })

}

export {
    init
}