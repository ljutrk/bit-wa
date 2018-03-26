import { Author } from "../entities/Author";
import { url } from '../shared/constants';

class ServiceAuthors {

    fetchAuthors = () => {
        return fetch(url.authorsURL)
            // return fetch("http://localhost:3004/users")
            .then(response => response.json())
            .then(authors => {
                return authors.map(author => {
                    return new Author(author);
                });
            });
    }

    fetchAuthor = (id) => {

        return fetch(`${url.authorsURL}${id}`)
            .then(response => response.json())
            .then(author => new Author(author));

    }


}

export const serviceAuthors = new ServiceAuthors()