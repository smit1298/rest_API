import express from "express";

const router = express.Router();

const users =  [
    {
        lastName: "John",
        firstName: "Doe",
        age: 25
    },
    {
        lastName: "Jane",
        firstName: "Doe",
        age: 24
    }
]

router.psot('/', (req, res) => {
    console.log(users);
    res.send(users);
});


export default router;
