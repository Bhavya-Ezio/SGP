const { pool } = require('./dbConnection');
async function get_data(s_no, r_no) {
    const client = await pool.connect();

    try {
        const query = `SELECT m.sender_no, u1.username AS sender_name, m.receiver_no, u2.username AS receiver_name, m.message FROM messages AS m LEFT JOIN login_info AS u1 ON m.sender_no = u1.mob_number LEFT JOIN login_info AS u2 ON m.receiver_no = u2.mob_number where (m.sender_no=$1 and m.receiver_no=$2) or (m.sender_no=$2 and m.receiver_no=$1);`;
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