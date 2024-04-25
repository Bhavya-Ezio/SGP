const { pool } = require('./dbConnection');
async function checkData(password, number) {
    const client = await pool.connect();

    try {
        const query = `SELECT username,mob_number FROM login_info WHERE mob_number=$1 AND password=$2;`;
        const values = [number, password,];
        const result = await client.query(query, values);
        if (result.rowCount === 1) {
            // console.log(result.rows[0]);
            return result.rows[0];
        } else {
            return "User not found";
        }
    } catch (error) {
        console.error('Error adding data:', error);
    } finally {
        client.release();
    }
}

module.exports = {checkData}