module.exports = function(app, urlEncodedParser, csrfProtection){

    app.post('/user/register', urlEncodedParser, csrfProtection, (req, res) => {
        res.json(req.body);
    });
    
}