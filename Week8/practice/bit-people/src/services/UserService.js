import { User } from '../entities/User';

const getUsers = () => {
    return fetch("https://randomuser.me/api/?results=15")
        .then(response => response.json())
        .then(jsonResponse => {
            return jsonResponse.results.map(user => {
                return new User(user);
            })
        })
}

export { getUsers };