// DEPENDENCIES
// REQUIRE MODELS
const db = require('../models');

// Routes
module.exports = function(app) {

    // Get route for burgers
    app.get('/', function(req, res) {
        db.Burger.findAll().then(function(result) {
            let hbsObj = {
                burgers: result
            };
            res.render('index', hbsObj);
        });
    });

    // Post route for adding new burger
    app.post('/api/burgers', function(req, res) {
        db.Burger.create({
            burger_name: req.body.burger_name,
            devoured: req.body.devoured
        }).then(function(result) {
            res.json(result);
        }).catch(function(err) {
            res.json(err);
        });
    });

     // Put route for updating burger status
     app.put('/api/burgers', function(req, res) {
        db.Burger.update({
            burger_name: req.body.burger_name,
            devoured: true
        }, {
            where: {
                id: req.body.id
            }
        }).then(function(result) {
            res.json(result);
        }).catch(function(err) {
            res.json(err);
        });
     });

};
