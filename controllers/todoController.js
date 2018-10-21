module.exports = function(app, urlEncodedParser, csrfProtection){

    app.get('/todo', (req, res) => {
        res.render("todo/index");
    });
    
    app.post("/todo", urlEncodedParser, (req, res) => {
        res.json(req.body);
    });
}