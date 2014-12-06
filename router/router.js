/*
fluffy-lawyer
Copyright (c) 2014 Luis Enrique Arriojas
http://opensource.org/licenses/MIT

██╗     ██╗   ██╗██╗███████╗     █████╗ ██████╗ ██████╗ ██╗ ██████╗      ██╗ █████╗ ███████╗    
██║     ██║   ██║██║██╔════╝    ██╔══██╗██╔══██╗██╔══██╗██║██╔═══██╗     ██║██╔══██╗██╔════╝    
██║     ██║   ██║██║███████╗    ███████║██████╔╝██████╔╝██║██║   ██║     ██║███████║███████╗    
██║     ██║   ██║██║╚════██║    ██╔══██║██╔══██╗██╔══██╗██║██║   ██║██   ██║██╔══██║╚════██║    
███████╗╚██████╔╝██║███████║    ██║  ██║██║  ██║██║  ██║██║╚██████╔╝╚█████╔╝██║  ██║███████║    
╚══════╝ ╚═════╝ ╚═╝╚══════╝    ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝ ╚═════╝  ╚════╝ ╚═╝  ╚═╝╚══════╝  

You're reading. I want to work for you.
https://www.linkedin.com/in/luisarriojas

*/

module.exports = function(app, db) {
    app.get('/read', function(req, res) {
        var read = require("./../scripts/read")(req, res, db);
    });
    app.post('/scoreSave', function(req, res) {
        req.session.score = 'passed';
        req.session.save(function(err) {
            res.json({
                result: 'saved'
            });
        });
    });
    app.get('/scoreGet', function(req, res) {
        if (req.session.score == 'passed') {
            res.json({
                result: 'Test passed'
            });
            delete req.session.score;
            req.session.save();
        } else {
            res.json({
                result: 'Test not passed'
            });
        }
    });
};