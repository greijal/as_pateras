'use strict'

const
    express = require("express"),
    app = express(),
    router_api = require('./router/api.js'),
    router_site = require('./router/site.js')


app.listen(3000, () => {
    console.log("Server running on port 3000");
})

app.use('/',router_site);
app.use('/api',router_api);
app.use('/public',express.static(__dirname + '/public'))


