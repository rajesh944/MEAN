const express = require('express');
const router = express.Router();    

router.get('/', function(request, response){
    response.render('index', {
        name: 'Raj',
        title: 'Software Engineer'
    });
})

module.exports = router;