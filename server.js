// DEPENDENCIES
const express = require('express');

// SET UP EXPRESS APP
const app = express();
const PORT = process.env.PORT || 8080;

// REQUIRE MODELS
const db = require('./models');

// HANDLE DATA PARSING
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// LINK TO STATIC DIRECTORY
app.use(express.static('public'));

// ROUTES
require('./routes/api-routes.js')(app);

// SYNC SEQUELIZE MODELS, START APP
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log(`App listening on PORT: ${PORT}`);
    });
});