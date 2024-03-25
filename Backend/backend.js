const cors = require('cors');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const {addData} = require('./addData.js');
const {checkData} = require('./checkData.js');
const {get_data} = require('./getMessage.js')

app.use(cors());
app.use(bodyParser.json());

app.post('/add-data', async (req, res) => {
  try {
    const x = req.body;
    // console.log(req.body);
    let username = x.username;
    let number = x.number;
    let password = x.password;
    const response= await addData(username, password, number)
    // console.log(`username: ${username}\nnumber: ${number}\npassword: ${password}`);
    res.json({ message: response.message });
  } catch (error) {
    console.error('Error adding data:', error);
    res.status(500).json({ message: 'Error adding data' });
  }
});

app.post('/check-data', async (req, res) => {
  try {
    const x = req.body;
    let number = x.number;
    let password = x.password;
    let valid = await checkData(password, number)
    res.json(valid)
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error checking data' });
  }
});

app.post('/get-chat', async (req,res) =>{
  try{
    const x = req.body;
    let senderid=x.senderid;
    let receiverid=x.receiverid;
    // console.log(senderid,receiverid);
    msg=await get_data(senderid,receiverid);
    // console.log(msg)
    res.json(msg);
  }
  catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error checking data' });
  }
});
app.listen(3000, () => console.log('Node.js server listening on port 3000'));