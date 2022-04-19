import express from "express";

const router = express.Router();

router.get('/u', (req, res) => {
    res.send('Hello');
});


export default router;
