const { pool } = require('./dbConnection');

async function addMessage(content, s_no, r_no, t_message) {
    const client = await pool.connect();

    try {
        const query = `INSERT INTO MESSAGES VALUES ($1 , $2 , $3 , $4);`;
        const values = [s_no, r_no, content, t_message];
        await client.query(query, values);
        const query1 = `select id from login_info where mob_number = $1`;
        const values1 = [r_no];
        const result = await client.query(query1, values1);
        return result;
    } catch (error) {
        console.error('Error adding data:', error);
    } finally {
        client.release();
    }
}

module.exports = { addMessage }