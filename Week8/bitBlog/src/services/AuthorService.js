const getAuthors = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())

}

const getPosts = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())

}

const getSingleAuthor = (authorID) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${authorID}`)
        .then(response => response.json())

}

const getSinglePost = (postID) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`)
        .then(response => response.json())

}



export { getAuthors, getPosts, getSingleAuthor, getSinglePost }