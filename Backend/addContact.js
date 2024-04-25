const { pool } = require('./dbConnection');
async function addContact(mob_no,add_no) {
    const client = await pool.connect();

    try {
        const query = `INSERT INTO contact_list VALUES ($1,$2);`;
        const values = [mob_no,add_no];
        await client.query(query, values);
        console.log('contact added successfully!');
        return { success: true, message: 'contact added successfully!' };
    } catch (error) {
        console.error('Error adding data in db:', error);
        return { success: false, message: error.detail };
    } finally {
        client.release();
    }
}

module.exports = {addContact}