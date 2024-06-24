const express = require('express');
const router = express.Router();
const db = require('../app'); 

router.get('/login', (req,res) => {
    res.render('mahasiswa/login');
});
router.get('/dashboard', (req, res) => {
  res.render('mahasiswa/dashboard');
});


router.get('/matakuliah', (req, res, next) => {
    req.getConnection(function(err, conn) {
        if (err) throw err;
        conn.query('SELECT * FROM matkul', function(err, rows) {
            if (err) throw err;
            res.render('mahasiswa/matakuliah', { matkul: rows });
        });
    });
});

    
router.get('/kritiknilai', (req,res) => {
    res.render('mahasiswa/kritiknilai');
});

router.get('/nilaimk', (req, res, next) => {
    req.getConnection(function(err,conn){
        conn.query('SELECT * FROM nilai', function(err, results) {
            if (err) throw err;
            res.render('mahasiswa/nilaimk', {nilai: results});
        });
    });
});
    



module.exports = router;


