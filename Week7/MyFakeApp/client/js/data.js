import Post from "./post.js";

const backendURL = 'http://127.0.0.1:3001/';



// const fetchData = () => fetch(backendURL)
//     .then(response => response.json())
//     .then(postList => createPosts(postList));

const fetchData = () => {
    return fetch(backendURL)
        .then((response) => {
            // console.log(response);
            return response.json();
            
        })
        .then((postList) => {
            // console.log(postList);
            
            return createPosts(postList)
        })
}


const createPosts = (postList) => {
    // console.log(postList);
    
    return postList.map((postData) => {
        const {id, title, intro} = postData;
        // console.log(postData);
        return new Post(id, title, intro);
    })
}
// const createPosts = (postList) => {
//     return postList.map((postData) => {
//         const {id, title, intro} = postData;
//         return new Post(id, title, intro);
//     })
// }

export {fetchData}