import express from "express";

const router = express.Router();

const users =  [
  
]

router.get('/', (req, res) => {
    console.log(users);
    res.send('Hello');
});


export default router;
