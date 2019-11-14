const express = require('express');
const router = express.Router();
const addpage = require('../views/addPage')
const main = require('../views/main')


router.get('/', (req, res, next) => {
    res.redirect('/');
})

// router.post('/', (req, res, next) => {
//     console.log('sdfghjkjnbvcdfghjgfrghj', req.body)
//     // res.send('wiki post');
// })

router.get('/add', (req, res, next) => {
    res.send(addpage());
})


module.exports = router;

const { Page } = require("../models");
const { addPage } = require("../views");

router.post('/', async (req, res, next) => {
    
    // STUDENT ASSIGNMENT:
    // add definitions for `title` and `content`
    
    // make sure we only redirect *after* our save is complete!
    // note: `.save` returns a promise.
    try {
        const page = await Page.create({
            title: req.body.title,
            content: req.body.pageContentTextArea
        });
    res.redirect('/');
  } catch (error) { next(error) }
});