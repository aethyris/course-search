const express = require('express');
const router = express.Router();

const fs = require('fs');
let raw_data = fs.readFileSync('./courses.json');
let course_data = JSON.parse(raw_data);

router.get('/', (req, res) => {
    let output = {
        courses : course_data["courses"]   
    }
    res.json(output);
})

router.get('/by_course_code/:qcode', (req, res) => {
    let query = req.params['qcode'];
    let filtered_courses = course_data["courses"].filter(e => e.course_code.toLowerCase().includes(query.toLowerCase()));
    let output = {
        courses: filtered_courses
    };
    res.json(output);
})

router.get('/by_title/:qtitle', (req, res) => {
    let query = req.params['qtitle'];
    let filtered_courses = course_data["courses"].filter(e => e.title.toLowerCase().includes(query.toLowerCase()));
    let output = {
        courses: filtered_courses
    };
    res.json(output);
})

router.get('/by_name/:qname', (req, res) => {
    let query = req.params['qname'];
    let filtered_courses = course_data["courses"].filter(e => e.instructor.toLowerCase().includes(query.toLowerCase()));
    let output = {
        courses: filtered_courses
    };
    res.json(output);
})

router.get('/by_level/:qlevel', (req, res) => {
    let query = req.params['qlevel'];
    if (query == 'all') {
        output = {
            courses: course_data["courses"]
        };
    } else {
        filtered_courses = course_data["courses"].filter(e => e.course_level == query);
        output = {
            courses: filtered_courses
        };
    }
    res.json(output);
})

router.get('/combined_query/:qname/:qlevel', (req, res) => {
    let name = req.params['qname'];
    let level = req.params['qlevel'];
    if (level == 'all') {
        filtered_courses = course_data["courses"].filter(e => e.instructor.toLowerCase().includes(name.toLowerCase()));
    } else {
        filtered_courses = course_data["courses"].filter(
            e => {
                if ((e.instructor.toLowerCase().includes(name.toLowerCase())) && (e.course_level == level)) {
                    return true;
                }
                return false;
            }
        );
    }
    let output = {
        courses : filtered_courses
    };
    res.json(output);
})

module.exports = router