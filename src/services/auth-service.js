import User from "../models/user-model.js";


export const register = (userData) => {
    return User.create(userData);
};

const authService = {
    register
};

export default authService;