import {Express} from "express";
import {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/Users.js";

const express = require("express");

const router = Express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.put('/users/.id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;