import Users from ".../models/UserModel.js";
import bcrypt from "bcrypt";

const getUsers = async(req, res) => {
    try{
        const users = await Users.findAll();
        res.json(users);
    } catch (error) {
        console.log (error);
    }
}

export const Register = async (req, res) => {
    
}