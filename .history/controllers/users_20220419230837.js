import { v4 as uuidv4 } from 'uuid';


export const getUsers = (req, res) => {
    res.send(users);
}

export const createUser = (req, res) => {
    const user = req.body;

   users.push({ ...user, id:  uuidv4() });

   res.send(`User with the name ${user.firstName} added to the database`);
}

export const getUser = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id)
    res.send(foundUser)
}

export 


