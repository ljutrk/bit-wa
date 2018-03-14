class Post {
    constructor(id, title, intro) {
        this.id = id;
        this.title = title;
        this.intro = intro;
    }

}

const createPosts = (postList) => {
    const ourPostList = [];
    const post = postList.map((postData) => {
        const {
            id,
            title,
            intro
        } = postData;
        const ourPost = new Post(id, title, intro);
        ourPostList.push(ourPost);
        return ourPost;
    })
    return ourPostList;
}

export {
    createPosts
}