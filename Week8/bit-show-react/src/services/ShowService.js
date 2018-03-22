import { urlConstants } from '../shared/constants'
import { Show } from '../entities/Show'
import { SingleShow } from '../entities/SingleShow'

function fetchShows() {

    return fetch("https://api.tvmaze.com/shows")
        .then(response => response.json())
        .then(showList => showList.map(show => new Show(show)))
        // .catch(error)
}

function fetchSingleShow(id) {
    return fetch(`http://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`)
        .then(response => response.json())
        .then(show => new SingleShow(show))
}

export { fetchShows, fetchSingleShow };