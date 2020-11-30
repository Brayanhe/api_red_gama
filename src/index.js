import "babel-polyfill"
import express, {json} from 'express';
import '../db/mongoose';
import poliza from './routers/Poliza';

const app = express();
const port = process.env.PORT;


app.use(json());
app.use(poliza)



app.listen(port, () => {
    console.log('server is up in ' + port);
})
