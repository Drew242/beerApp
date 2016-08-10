var Beer = require('../models/beer');

module.exports = {
    create: (req, res) => {
        var beer = new Beer(req.body);

        beer.save((err, newBeer)=>{
            err?  reportError(res, err) : res.json(newBeer);
        })
    },
    read: (req, res) => {
        Beer.find(req.query, (err, beer) => {
            err?  reportError(res, err) : res.json(beer);
        })
    }
}

function reportError(res, err) {
    console.error('ERROR'.red, err);
    res.status(500).json(err);
}
