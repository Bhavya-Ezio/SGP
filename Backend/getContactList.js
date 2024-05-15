const { pool } = require('./dbConnection');
async function get_contactList(user_no) {
    const client = await pool.connect();
    try {
        const query = `SELECT associated_no, username,language FROM contact_list join login_info on associated_no=mob_number where mob_no=$1;`;
        const values = [user_no];
        const result = await client.query(query, values);
        return result;
    } catch (error) {
        console.error('Error adding data:', error);
    } finally {
        client.release();
    }
}

module.exports = {get_contactList}