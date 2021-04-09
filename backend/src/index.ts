import express from 'express';
import http from 'http';

const app = express();
const server = http.createServer(express);

app.get('/api/streams/next', (req, res) => {
    res.send({
        foo: 'bar',
    });
});

app.listen(3080, () => {
    console.log('listening on 3080');
});
