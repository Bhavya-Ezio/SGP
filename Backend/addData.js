const { pool } = require('./dbConnection');
async function addData(username, password, number, language) {
    const client = await pool.connect();

    try {
        const query = `INSERT INTO login_info (username , password,mob_number,language) VALUES ($1,$2,$3,$4);`;
        const values = [username, password, number, language];
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