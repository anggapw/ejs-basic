const express = require('express')

const app = express()

// setup view engine with ejs
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    let text = "Hello world";
    let dataSiswa = [
        {nama: "Dimas", age: 19},
        {nama: "Rumondang", age: 20},
        {nama: "Chris", age: 21},
    ]

    res.render('pages/home', {
        text: text,
        dataSiswa: dataSiswa
    })
})

app.get('/about', (req, res) => {
    let textAbout="Biodata";
    let personalData = {
        fullname: "Angga Prasetya",
        nickname: "Angga",
        age: 32,
        address: "Banjarmasin",
        hobby: {
            hobby1: "Traveling",
            hobby2: "Playing Games",
            hobby3: "Music"
        }

    }
    res.render('pages/about', {
        textAbout:textAbout,
        personalData:personalData
    })
})

app.listen(5000, () => {
    console.log('Server is running');
})