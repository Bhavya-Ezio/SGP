const { pool } = require('./dbConnection');

async function addMessage(content, s_no, r_no, t_message) {
    const client = await pool.connect();

    try {
        const query = `INSERT INTO MESSAGES VALUES ($1 , $2 , $3 , $4);`;
        const values = [s_no, r_no, content, t_message];
        const result = await client.query(query, values);
        return result;
    } catch (error) {
        console.error('Error adding data:', error);
    } finally {
        client.release();
    }
}

module.exports = { addMessage }