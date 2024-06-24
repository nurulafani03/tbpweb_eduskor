const mysql = require('mysql');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'tbpweb'
});


connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL as id', connection.threadId);
});


router.get('/matkul', (req, res) => {
  
  connection.query('SELECT * FROM matkul', (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).send('Error fetching data from database');
    }
    
    res.render('matkul', { matkul: results });
  });
});


connection.end();
