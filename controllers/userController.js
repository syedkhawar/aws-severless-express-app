module.exports = function(app, urlEncodedParser, csrfProtection, sequelize, Sequelize){

    app.post('/user/register', urlEncodedParser, csrfProtection, (req, res) => {
        res.json(req.body);
    });
    
    app.get('/users', (req, res) => {
        const Person = sequelize.define('Persons',  {
            PersonID: Sequelize.INTEGER,
            LastName: Sequelize.STRING,
            FirstName: Sequelize.STRING,
            Address: Sequelize.STRING,
            City: Sequelize.STRING 
        }, {
            timestamps: false // timestamps will now be true
        });
        Person.findAll({}).then((Person)=>{
            res.json(Person);
        });
    });
}