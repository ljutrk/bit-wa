export const fetchData = () => {
    return fetch(backendURL)
        .then((response) => {
            return response.json();
        })
        .then((postList) => {
            return createPosts(postList)
        })
}


const createPosts = (postList) => {
    return postList.map((postData) => {
        const {id,title,intro} = postData;
        return new Post(id, title, intro);
    })
}