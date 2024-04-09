const { pool } = require('./dbConnection');
async function get_data(s_no, r_no) {
    const client = await pool.connect();

    try {
        const query = `SELECT * FROM messages WHERE (sender_no=$1 and receiver_no=$2) or (sender_no=$2 and receiver_no=$1) ;`;
        const values = [s_no, r_no];
        const result = await client.query(query, values);
        return result.rows;
    } catch (error) {
        console.error('Error adding data:', error);
    } finally {
        client.release();
    }
}

module.exports = {get_data}