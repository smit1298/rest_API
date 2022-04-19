import express from "express";
import { v4 as uuidv4 } from 'uuid';

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
    res.send(users);
});


router.post ('/', (req, res) => {
     const user = req.body;


    users.push(user)
    res.send(`user with the name ${user.firstName} added to the database`);
})


export default router;
