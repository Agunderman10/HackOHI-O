// import express from node-modules
const express = require('express')

// import lowdb from node-modules
const low = require('lowdb')

// import FileSync from node-modules
const FileSync = require('lowdb/adapters/FileSync')

// set the router variable = to our express router
const router = express.Router()

// set our file adapter to be the database json file
const adapter = new FileSync("db.json")

// set database to the adapter database file
const db = low(adapter)

// set database defaults
db.defaults({ 
    coder_accounts: [
    {
        "coder_id": {},
        "coder_name": {},
        "coder_profile_pic": {},
        "coder_bio": {},
        "coder_location": {},
        "coder_email": {}
    }
], company_accounts:[
    {
        "company_id": {},
        "company_name": {},
        "company_logo": {},
        "company_bio": {},
        "company_location": {},
        "company_email": {}
    }
], projects: [
      {
        "project_id": {},
        "project_name": {},
        "project_due_date": {},
        "project_description": {},
        "project_company": {}
      }
    ]
   }).write();

// define our basic routes we'll need
router.get('/', (req, res, next) => {
    res.send('Hello from Routes Folder!')
})

router.get('/company-login', (req, res, next) => {
    res.send('This is the route for companies logging in.')
})

router.post('/company-login', (req, res, next) => {
    console.log('POST Request made to localhost:3000/company-login')

    const data = req.body;

    db.set("company_accounts.company_id", req.body.company_id).write()

    db.get("company_accounts").push(req.body.company_accounts).write()

    res.send(req.body)
})

router.get('/coder-login', (req, res, next) => {
    res.send('This is the route for coders logging in.')
})

router.get('/coder-profile/:id', (req, res, next) => {
    res.send('This is the route for each coder profile.')
})

router.get('/company-profile/:id', (req, res, next) => {
    console.log('GET Request made to localhost:3000/company-profile/' + req.params.id)

    const company = db.get('company_accounts').find({ company_id: req.params.id }).value();

    if(company) 
    {
        res.status(200).send(company)
    }
    else
    {
        res.status(404).send("Project not found")
    }
})

router.get('/projects', (req, res) => {
    console.log('GET Request made to localhost:3000/projects')

    const projects = db.get('projects').value()

    res.status(200).send(projects)
})

router.post('/projects', (req, res, next) => {
    console.log('POST Request made to localhost:3000/projects')

    const data = req.body;

    db.set("projects.project_id", req.body.project_id).write()

    db.get("projects").push(req.body.projects).write()

    res.send(req.body)
})

router.get('/projects/:id', (req, res, next) => {
    console.log('GET Request made to localhost:3000/projects/id')

    const project = db.get('projects').find({ project_id: req.params.id }).value();

    if(project)
    {
        res.status(200).send(project)
    }
    else 
    {
        res.status(404).send("Project not found")
    }
})

// export our router
module.exports = router