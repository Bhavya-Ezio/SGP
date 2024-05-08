const cors = require('cors');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io')

const { addData } = require('./addData.js');
const { checkData } = require('./checkData.js');
const { get_data } = require('./getMessage.js');
const { get_contactList } = require('./getContactList.js');
const { addMessage } = require('./addMessage.js');
const { addContact } = require('./addContact.js');
const { log } = require('console');

const server = http.createServer(app);
const io = socketIO(server);

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.post('/add-data', async (req, res) => {
  try {
    const x = req.body;
    // console.log(req.body);
    let username = x.username;
    let number = x.number;
    let password = x.password;
    let language = x.language;
    const response = await addData(username, password, number, language)
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

app.post('/get-chat', async (req, res) => {
  try {
    const x = req.body;
    let sender_no = x.sender_no;
    let receiver_no = x.receiver_no;
    // console.log(sender_no,receiver_no);
    msg = await get_data(sender_no, receiver_no);
    // console.log(msg)
    res.json(msg);
  }
  catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error checking data' });
  }
});

app.post('/get-contact-list', async (req, res) => {
  try {
    const x = req.body;
    let user_no = x.user_no;
    // console.log(user_no);
    clist = await get_contactList(user_no);
    // console.log(clist.rows)
    res.json(clist.rows);
  }
  catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error checking data' });
  }
})

app.post("/add-message", async (req, res) => {
  try {
    const x = req.body
    const content = x.content;
    const sender_no = x.sender_no;
    const receiver_no = x.receiver_no;
    const t_message = x.translated_content;
    const response= await addMessage(content, sender_no, receiver_no, t_message)
    // console.log(response.rows[0].id);
    let userID = response.rows[0].id
    let msg = await get_data(sender_no, receiver_no);
    // msg.sort((a, b) => b.msg_id - a.msg_id);
    // console.log(msg);
    res.json(msg);
    io.emit('newMessageR');
    // if (connectedUsers[userID]) {
      // console.log(connectedUsers[userID]);
      // io.to(connectedUsers[userID]).emit('newMessageR');
      // console.log("eventSent")
    // }
  } catch (error) {
    console.log(error);
  }
})

app.post("/add-contact", async (req, res) => {
  try {
    const x = req.body
    // console.log("addcontact",x);
    const mob_no = x.user_number;
    const add_no = x.add_number;
    let response = await addContact(mob_no, add_no);
    // console.log(response);
    res.json({ message: response })
  } catch (error) {
    console.log(error);
  }
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/', 'index.html'));
});

//socket IO
const connectedUsers = {};

io.on('connection', (socket) => {
  // console.log('A new user just connected');

  socket.on('register', (userID) => {
    console.log(socket.id);
    connectedUsers[userID] = socket.id;
    // console.log(`${userID} registered`);
  });

  socket.on('user-logout', (userID) => {
    // console.log(`${userID} logged out`);
    delete connectedUsers[userID];
  })

});
server.listen(3000, () => console.log('Node.js server listening on port 3000'));