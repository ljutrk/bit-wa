const loremIpsum = require('lorem-ipsum');
const { Post } = require('./post');

const getTitle = () => loremIpsum({
    count: 3,
    units: 'words'
});
const getIntro = () => loremIpsum({
    count: 2,
    units: 'sentences'
});

const getFakePostData = (count) => {
    const posts = [];
    for (let i = 0; i < count; i++) {
        const title = getTitle();
        const intro = getIntro();
        const post = new Post(i, title, intro);
        posts.push(post);
    }
    return posts;

}
module.exports = {
    getFakePostData
};