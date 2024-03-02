const { pool } = require('./dbConnection');
async function addData(username, password, number) {
    const client = await pool.connect();

    try {
        const query = `INSERT INTO login_info (username , password,mob_number) VALUES ($1,$2,$3);`;
        const values = [username, password, number];
        await client.query(query, values);
        console.log('Data added successfully!');
        return { success: true, message: 'Data added successfully!' };
    } catch (error) {
        console.error('Error adding data in db:', error);
        return { success: false, message: error.detail };
    } finally {
        client.release();
    }
}

module.exports = {addData}