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
    res.send(users);
});


router.post ('/', (req, res) => {
    
 const user = req.body;

    users.push(user)
    res.send(`user with the username ${user.firstName} added to the database`);
})


export default router;
