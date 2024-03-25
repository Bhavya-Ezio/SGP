const { pool } = require('./dbConnection');
async function get_data(sid, rid) {
    const client = await pool.connect();

    try {
        const query = `SELECT * FROM messages WHERE (senderid=$1 and receiverid=$2) or (senderid=$2 and receiverid=$1) ;`;
        const values = [sid,rid];
        const result = await client.query(query, values);
        return result;
    } catch (error) {
        console.error('Error adding data:', error);
    } finally {
        client.release();
    }
}

module.exports = {get_data}