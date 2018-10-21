module.exports = function(app, urlEncodedParser, csrfProtection){

    app.get('/', csrfProtection, (req, res) => {
        res.render("home/index", { csrfToken: req.csrfToken() });
    });
    
}