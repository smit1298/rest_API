import express from "express";

const router = express.Router();

//all routes here are starting with /users
router.get('/', (req, res) => {
    res.send('Hello');
});


export default router;
