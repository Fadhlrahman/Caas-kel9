import Users from "../model/UserModel.js";
import bcrypt from "bcrypt";

export const getUsers = async (req, res) => {
    try {
        const users = await Users.findAll();
        res.json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const Register = async (req, res) => {
    const { name, email, password, confPassword, phoneNumber } = req.body;
    if (password !== confPassword) 
        return res.status(400).json({ msg: "Password dan Confirm Password tidak cocok" });

    try {
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt);
        
        await Users.create({
            name: name,
            email: email,
            password: hashPassword,
            phoneNumber: phoneNumber
        });
        
        res.json({ msg: "Register Berhasil" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


export const Login = async (req, res) => {
    try {
        const user = await Users.findOne({
            where: {
                email: req.body.email
            }
        });

        if (!user) {
            return res.status(400).json({ msg: "Email tidak ditemukan" });
        }

        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) {
            return res.status(400).json({ msg: "Password salah" });
        }

        res.status(200).json({ msg: "Login berhasil" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
