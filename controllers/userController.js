module.exports = function(app, urlEncodedParser, csrfProtection, sequelize, Sequelize){


    const Person = sequelize.define('Persons',  {
        LastName: Sequelize.STRING,
        FirstName: Sequelize.STRING,
        Address: Sequelize.STRING,
        City: Sequelize.STRING 
    }, {
        timestamps: false // timestamps will now be true
    });

    app.post('/user/register', urlEncodedParser, csrfProtection, (req, res) => {
        Person.create({
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Address: req.body.Address,
            City: req.body.City
        }).then((Person)=>{
            res.json(Person);
        });
    });
    
    app.get('/users', (req, res) => {

        Person.findAll({}).then((Person)=>{
            res.json(Person);
        });
    });
}