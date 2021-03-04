const http = require('http')


const app = http.createServer((req, res) => {
    // res.write('Hello From Node Js')
    // res.end();

    res.end('Hello  I am Ibrahem')
})

app.on('listening', () => console.log('App Running On Port 5000'))

app.listen(5000)



