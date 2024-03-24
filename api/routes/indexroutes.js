// indexroutes.js atau file yang menangani rute
import express from "express";
import { getUsers, Register, Login } from "../controllers/Users.js";

const router = express.Router();

router.get('/users', getUsers); // Mendapatkan daftar pengguna
router.post('/users', Register); // Mendaftarkan pengguna baru
router.post('/login', Login); // Login pengguna

export default router;
