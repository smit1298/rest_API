import express  from "express";
import bodyParser from 'body-parser';

import usersRoutes from './routes/users'

const app = express();
const PORT = 5000;
 
app.use(bodyParser.json());

app.use('')

app.get('/', (req, res) => res.send('Hello from Homepage.')
);


app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));