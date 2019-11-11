var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors')
app.use(cors());
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: true }));

const GoogleSpreadsheet = require('google-spreadsheet');
const { promisify } = require('util');

const creds = require('./prueba correo-dc1211c43ada.json');
const customers = [];
async function accessSpreadsheet(mailInput) {
    const doc = new GoogleSpreadsheet('1nOwUV2NL-rIV3q220P4kWzOlvlW_F3QgXj7eRgpFoHo');
    await promisify(doc.useServiceAccountAuth)(creds);
    const info = await promisify(doc.getInfo)();
    const sheet = info.worksheets[0];
    const rows = await promisify(sheet.getRows)({
        offset: 1
    });
    const row = {
        fecha: new Date(),
        correo: mailInput,
    }
    await promisify(sheet.addRow)(row)

    return rows.forEach(row => {
        customers.push({ nro: row.nro, fecha: row.fecha, correo: row.correo });
    })

}


app.post("/api/customers", async(req, res) => {
    console.log(req.body);
    res.json(accessSpreadsheet(JSON.stringify(req.body.EmailUser))
        .then(user => {
            res.json(user);
        }))


});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);