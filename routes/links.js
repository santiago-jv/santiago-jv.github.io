const express = require('express')
const { body } = require('express-validator')
const router = express.Router()
const pool = require('../database')

router.get('/delete/:id' ,async (req, res)=>{
    await pool.query('DELETE FROM student WHERE id = ?' ,[req.params.id])

    res.redirect('/students')
})
router.get('/add-student', (req, res) => {
    res.render('links/add-student.hbs')
})
router.post('/add-student', async (req, res) => {
    console.log(req.body)
    const newStudent = {
        name: req.body.name,
        age: req.body.age
    }
    await pool.query('INSERT INTO student set ?', [newStudent])
    res.redirect('/students')
})

router.get('/' ,async (req, res)=>{
    
    const students = await pool.query('SELECT * FROM student')
    console.log(students)
    res.render('links/list.hbs',{students})
})
router.get('/edit-student/:id',async (req, res)=>{
 const students =await pool.query('SELECT * FROM student WHERE id = ?',[req.params.id])
  res.render('links/edit-student.hbs',{studentToEdit:students[0]})
})
router.post('/edit-student/:id',async (req, res)=>{
    const {name, age} = req.body
    await pool.query('UPDATE student set ? WHERE id = ?',[{name,age},req.params.id])
    res.redirect('/students')
   })
module.exports = router;