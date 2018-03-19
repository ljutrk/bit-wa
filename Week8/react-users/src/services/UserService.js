import User from '../entities/User';
import { users } from '../data/users';

class UserService {
    
    getUsers() {
        return users.map(user => {

            return new User(user.name, user.picture, user.email, user.dob)
        })
    }
    fetchUsers(){
        return fetch("https://randomuser.me/api/?results=15")
        .then((response)=>{
            
            return response.json();
        })
        .then((users)=>{
            
            return users.results.map((user)=>{
                
                return new User(user);
            })
            
        })
    }
    
}
export const userService = new UserService();
