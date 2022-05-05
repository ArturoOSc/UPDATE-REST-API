const res = require('express/lib/response');
const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'mac',
    password: '',
    database: 'updatetask',
    port: '5432'

})

const getTask = async (req, res) => {
    const userid = req.params.userid;
    const response = await pool.query('SELECT * FROM task WHERE userid = $1', [userid]);
    res.status(200).json(response.rows);
 };


 const getTaskById = async (req, res) => {
    const userid = req.params.userid;
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM task WHERE userid = $1 AND id = $2', [userid, id]);
    res.status(200).json(response.rows);
};

const updateTask = async (req, res) => {
    const userid = req.params.userid;
    const id = req.params.id;
    const {title, dead_line, description, iscompleted, priority_id} = req.body;
    const response = await pool.query('UPDATE task SET title = $1, dead_line = $2, description = $3, iscompleted = $4, priority_id = $5 WHERE userid = $6 AND id = $7', [
        title,
        dead_line,
        description,
        iscompleted,
        priority_id,
        userid,
        id
    ]);
    res.status(200).json(response.rows);
    
};



module.exports ={
    getTaskById,
    getTask,
    updateTask
}