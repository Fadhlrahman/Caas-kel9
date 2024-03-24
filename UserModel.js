// UserModel.js
import { DataTypes } from "sequelize";
import db from "../config/DB.js"; // Adjusted import path

const Users = db.define('users', {
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    phoneNumber: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

export default Users;
