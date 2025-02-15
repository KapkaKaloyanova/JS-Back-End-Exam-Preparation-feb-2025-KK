import User from "../models/User.js";


export const register = async (userData) => {
    // check confirmPassword 
    if (userData.password !== userData.confirmPassword){
        throw new Error('Password mismatch!');
    }
    // const userCount = await User.countDocuments({email: userData.email}); // it will search all db
    // if (userCount>0) {
    //     throw new Error('User already exists!');
    // }
    const user = await User.findOne({email: userData.email}).select({_id: 1}); // will find the first one and stop
    if (user) {
        throw new Error('User already exists!');
    }

    return User.create(userData);
};

const authService = {
    register
};

export default authService;