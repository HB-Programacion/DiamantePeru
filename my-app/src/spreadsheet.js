function prueba() {
    const GoogleSpreadsheet = require('google-spreadsheet');
    const { promisify } = require('util');

    function printInfo(info) {
        console.log(`nro : ${info.nro}`);
        console.log(`fecha : ${info.fecha}`);
        console.log(`correo : ${info.correo}`)
        console.log(`-------------------------`)
    }


    const creds = require('./prueba correo-dc1211c43ada.json');
    async function accessSpreadsheet(mailInput) {
        const doc = new GoogleSpreadsheet('1nOwUV2NL-rIV3q220P4kWzOlvlW_F3QgXj7eRgpFoHo');
        await promisify(doc.useServiceAccountAuth)(creds);
        const info = await promisify(doc.getInfo)();
        const sheet = info.worksheets[0];
        const row = {
            nro: '5',
            fecha: 'hoy',
            correo: mailInput,
        }
        await promisify(sheet.addRow)(row)
    }
}
export default prueba;