import '@porch/fetchr-service-locator';
import express from 'express';
import os from 'os';
import registrar from '@porch/fetchr-service-registrar';
const app = express();

console.log('registrar.registered', registrar.registered);

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.listen(8080, () => console.log('Listening on port 8080!'));
