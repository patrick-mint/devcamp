module.exports = function (pool) {
    return {
        getUserId: async (id) => {
            let [rows, fields] = await pool.query('SELECT * FROM user WHERE id = ' + id);
            return rows[0] ? rows[0] : {};
        },
        getStudentId: async (id) => {
            let [rows, fields] = await pool.query('SELECT * FROM students WHERE id = ' + id);
            return rows[0] ? rows[0] : {};
        }
    }
 }
 

