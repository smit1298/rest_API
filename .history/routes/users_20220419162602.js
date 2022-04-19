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

router.get('/', (req, res) => {
    console.log(users);
    res.send(users);
});

router.post ('/', (req, res) => {
    console.log('POST ROUTE REACHED');

    res.send();
})


export default router;
