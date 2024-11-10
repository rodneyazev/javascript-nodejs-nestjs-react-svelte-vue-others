import express from "express";
import { getUsers, createUsers, getUser, deleteUser, updateUser } from "../controllers/users.js";

const router = express.Router();

router.get("/users", getUsers);
router.post("/users", createUsers);
router.get("/users/:id", getUser);
router.delete("/users/:id", deleteUser);
router.put("/users/:id", updateUser);

export default router;