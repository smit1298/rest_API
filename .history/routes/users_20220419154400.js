import express from "express";

const router = express.Router();

const users =  [
    {
        lastName: "John",
        firstName: "Doe",
        age: 25
    },
    {
        lastName: "John",
        firstName: "Doe",
        age: 25
    }
]

router.get('/', (req, res) => {
    console.log(users);
    res.send('Hello');
});


export default router;
