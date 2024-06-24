const express = require('express');
const path = require('path');
const mysql = require('mysql');
const myconnection = require ('express-myconnection');
const mahasiswaRoutes = require('./routes/mahasiswaRoutes');


const app = express();

const dbOptions = {
  host : 'localhost',
  user : 'root',
  password : '',
  port : '3306',
  database : 'tbpweb'
}


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(express.static(path.join(__dirname, 'public')));
app.use(myconnection(mysql,dbOptions, 'pool'));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/mahasiswa', mahasiswaRoutes);
app.get('mahasiswa/login', (req,res) => {
  res.render('mahasiswa/login');
});

app.get('/mahasiswa/kritiknilai', (req, res) => {
  res.render('mahasiswa/kritiknilai');
});

app.get('/mahasiswa/nilaimk', (req, res) => {
  res.render('mahasiswa/nilaimk');
});



app.listen(3000, () => {
  console.log('Server berjalan di port 3000');
});
