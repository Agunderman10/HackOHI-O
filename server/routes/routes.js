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

router.get('/coder-login', (req, res, next) => {
    res.send('This is the route for coders logging in.')
})

router.get('/coder-profile/:id', (req, res, next) => {
    res.send('This is the route for each coder profile.')
})

router.get('/company-profile/:id', (req, res, next) => {
    res.send('This is the route for each company profile.')
})

router.get('/projects', (req, res) => {
    console.log('GET Request made to localhost:3000/projects')
    console.log(db.get('projects').value())

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

router.get('/project/:id', (req, res, next) => {
    res.send('This is the route for each individual project.')
})

// GET Request for seeing listings of accounts
router.get('/accounts', (req, res, next) => {
    console.log('GET Request made to localhost:3000')

    var accounts = db.get('accounts').value()

    res.status(200).send(accounts)
})

// export our router
module.exports = router