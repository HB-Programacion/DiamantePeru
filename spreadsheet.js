const GoogleSpreadsheet = require('google-spreadsheet');
const { promisify } = require('util');


// function printInfo(info) {
//     console.log(`nro : ${info.nro}`);
//     console.log(`fecha : ${info.fecha}`);
//     console.log(`correo : ${info.correo}`)
//     console.log(`-------------------------`)
// }


const creds = require('./prueba correo-dc1211c43ada.json');
async function accessSpreadsheet(mailInput) {
    const doc = new GoogleSpreadsheet('1nOwUV2NL-rIV3q220P4kWzOlvlW_F3QgXj7eRgpFoHo');
    await promisify(doc.useServiceAccountAuth)(creds);
    const info = await promisify(doc.getInfo)();
    const sheet = info.worksheets[0];
    const rows = await promisify(sheet.getRows)({
        offset: 1
    });
    // const row = {
    //     nro: '5',
    //     fecha: 'hoy',
    //     correo: mailInput,
    // }
    // await promisify(sheet.addRow)(row)
    rows.forEach(row => {

    })
}

export default prueba;



import React, { Component } from 'react';
import './customers.css';

class Customers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        };
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    };

    componentDidMount() {
        // js listener para el form 
        document.getElementById("form1").addEventListener('submit', async() => {
            const rawResponse = await fetch('/api/customers', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.email)
            });
            const content = await rawResponse.json();

            console.log(`soy content ${content}`);
        });


    }

    render() {
        return ( <
            div >
            <
            h2 > Customers < /h2> <
            form action = "/api/customers"
            method = "get"
            id = "form1" >
            <
            input type = 'text'
            name = 'email'
            value = { this.state.email }
            onChange = { this.handleChange }
            /> <
            button type = "submit" > < /button> <
            /form> <
            ul >

            <
            /ul> <
            /div>
        );
    }
}

export default Customers;