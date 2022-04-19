import express from "express";

const router = express.Router();

//all routes here a
router.get('/', (req, res) => {
    res.send('Hello');
});


export default router;
