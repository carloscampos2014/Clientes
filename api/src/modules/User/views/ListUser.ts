import User from '../models/User';
import OneUser from './OneUser';

export default {
    render(users: User[]) {
        return users.map(user => OneUser.render(user));
    }
}