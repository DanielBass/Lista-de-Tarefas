const Task = require('../models/Task')

module.exports = class TaskController {

    static createTask (req, res){
        res.render('tasks/create')
    }

    static async createTaskSave(req,res){

        const task = {
            title: req.body.title,
            description: req.body.description,
            done: false,
            process: false
        }

        await Task.create (task)

        res.redirect('/tasks')
    }

    static async removeTask(req,res){
        const id = req.body.id

        await Task.destroy({where: {id: id}})

        res.redirect ('/tasks')
    }

    static async updateTask (req,res){
        
        const id = req.params.id

        const task = await Task.findOne({where: {id: id}, raw:true})

        res.render ('tasks/edit', {task})
    }

    static async  updateTaskPost(req,res){

        const id = req.body.id

        const task = {
            title: req.body.title,
            description: req.body.description
        }

        await Task.update (task, {where: {id: id}})

        res.redirect('/tasks')
    }

    static async toggleTaskStatus(req,res){
        
        const id = req.body.id
        let done = req.body.done
        let process = req.body.process

        if(done === '0'){
            done = '1'
            process = '0'
        }else{
            done = '0'
        }

        const task = {
            done: done,
            process: process
        }


        await Task.update(task, {where: {id: id}})

        res.redirect ('/tasks')
    }

    static async toggleTaskProcess (req,res){
        const id = req.body.id
        let done = req.body.done
        let process = req.body.process

        if(process === '0'){
            process = '1'
            done = '0'
        }else{
            process = '0'
        }

        const task = {
            done: done,
            process: process
        }


        await Task.update(task, {where: {id: id}})

        res.redirect ('/tasks')
    }

    static async showTask (req, res){

        const tasks = await Task.findAll({raw: true})
        res.render('tasks/all', {tasks})
    }
} 