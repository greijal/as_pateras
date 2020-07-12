'use strict'

const
    express = require('express'),
    router = express.Router()

router.get('/',(req,resp)=>{
        resp.redirect('/public/html/index.html')
});

module.exports = router;
