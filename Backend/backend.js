const { Pool } = require('pg');
const cors = require('cors');
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'loginauth',
  password: 'admin',
  port: 5432,
});

async function addData(username, password,number) {
  const client = await pool.connect();

  try {
    const query = `INSERT INTO login_info (username , password,mob_number) VALUES ($1,$2,$3);`;
    const values = [username , password,number];
    await client.query(query,values);
    console.log('Data added successfully!');
  } catch (error) {
    console.error('Error adding data:', error);
  } finally {
    client.release();
  }
}

async function checkData(password,number) {
  const client = await pool.connect();

  try {
    const query = `SELECT * FROM login_info WHERE mob_number=$1 AND password=$2;`;
    const values = [number, password,];
    const result=await client.query(query,values);
    if (result.rowCount === 1) {
      return "User found";
    } else {
      return "User not found";
    }
  } catch (error) {
    console.error('Error adding data:', error);
  } finally {
    client.release();
  }
}
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(cors()); 
app.use(bodyParser.json());
app.post('/add-data', async (req, res) => {
  try {
    const x = req.body;
    // console.log(req.body);
    let username=x.username;
    let number=x.number;
    let password=x.password;
    addData(username,password,number)
    // console.log(`username: ${username}\nnumber: ${number}\npassword: ${password}`);
    res.json({ message: 'Data added successfully!' });
  } catch (error) {
    console.error('Error adding data:', error);
    res.status(500).json({ message: 'Error adding data' });
  }
});

app.post('/check-data', async (req,res)=>{
  try {
    const x = req.body;
    let number=x.number;
    let password=x.password;
    let valid= await checkData(password,number)
    res.json(valid)
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error checking data' });
  }
});
app.listen(3000, () => console.log('Node.js server listening on port 3000'));