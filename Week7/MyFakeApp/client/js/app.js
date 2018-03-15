import { createPostDiv, displayError } from "./ui.js";
import { fetchData } from "./data.js";

const init = () => {

    fetchData()
        .then(function (post) {
            // console.log(post);
            createPostDiv(post);
        })
    // .then(posts => {
    //     createPostDiv(posts);
    // })
    // .catch(err => {
    //     showError()
    // })

}

export {
    init
}