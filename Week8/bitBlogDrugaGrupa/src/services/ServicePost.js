import { Post } from "../entities/Post";
import { url } from '../shared/constants';

class ServicePost {

    fetchPosts = () => {
        // return fetch(url.postsURL)
        return fetch("http://localhost:3004/posts")
            .then(response => response.json())
            .then(posts => {
                return posts.map(post => {
                    return new Post(post);
                });
            });
    }

    fetchNewPosts = (posts) => {
        return posts.map(post => {
            return new Post(post);
        });
    }

    fetchPostsFromOneAuthor = (id) => {
        return fetch(`${url.postsFromOneAuthorURL}${id}`)
            .then(response => response.json())
            .then(posts => {
                return posts.map(post => {
                    return new Post(post);
                });
            });
    }

    fetchSinglePost = (id) => {
        return fetch(`${url.postsURL}/${id}`)
            .then(response => response.json())
            .then(post => new Post(post));
    }

    createNewPost = (title, body, userID) => {
        return fetch('http://localhost:3004/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                userId: userID
            }),
            headers: {
                'Accept': 'application/json',
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
    }
}


export const servicePost = new ServicePost()