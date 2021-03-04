const http = require('http')
const fs = require('fs')


// CONTENT TYPES
// 1: application/json
// 2: text/html

// JSON.stringify
// JSON.parse

const app = http.createServer((req, res) => {


    try {
        const file = fs.readFileSync('./index.html')

        fs.writeFileSync(
          "./note.txt",
          "This Note Was Created By NodeJs AND Bla bla bla"
        );
        // fs.writeFileSync('./note.txt', 'hello')
        fs.appendFileSync("./note.txt", "hahahahahahahahahahahah");

        // fs.readFile('./index.html', (err, anotherFile) => {
        //     if (err) {console.log(err)}
        //     console.log(anotherFile)
        // })

        // res.write('Hello From Node Js')
        // res.end();

        const data = {
          email: "ahmed@gmail.com",
          name: "ahmed",
        };

        // // console.log(JSON.stringify(data))

        const str = JSON.stringify(data); // '{ "email": "ahmed@gmail.com", "name": "ahmed"}'

        // console.log(str.email)

        // const fromStringToJson = JSON.parse(str);

        // console.log(fromStringToJson.email)

        // console.log(fromStringToJson)

        res.setHeader("Content-Type", "text/html");

        res.end(file);

    } catch(err) {
        console.log
    }


    
})

app.on('listening', () => console.log('App Running On Port 5000'))

app.listen(5000)



