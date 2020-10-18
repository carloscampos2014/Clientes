import User from '../models/User'

export default {
    render(user: User) {
        return {
            id: user.id,
            Name: user.name,
            Email: user.email
        }
    },
}