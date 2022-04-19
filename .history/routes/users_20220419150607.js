import express from "express";

const router = express.Router();

const users =  [
    {
        lastName: "John",
        firstName: "Doe",
        age: 25
    }
]

router.get('/', (req, res) => {
    lo
    res.send('Hello');
});


export default router;
