const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();


app.use(express.json());

app.get('/createFile', (req, res) => {

    const folderPath = path.resolve(path.join(__dirname, "files"));

    const timestamp = new Date().toISOString().replace(/:/g, '-').replace(/T/g, '_').slice(0, -5);


    const fileName = `${timestamp}.txt`;

    const filePath = path.resolve(path.join(folderPath, fileName));

    fs.writeFile(filePath, timestamp, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error creating file');
        } else {
            res.send('File created successfully');
        }
    });
});

app.listen(3000, () => console.log('Server started on port 3000'));


