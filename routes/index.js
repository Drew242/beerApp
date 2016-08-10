var Render = require('./render'),
    API = require('./api');

module.exports = (app) => {
    app.get('/', Render.root);
    app.get('/dashboard', Render.dashboard);
    app.post('/api/beer', API.create);
    app.get('/api/beer', API.read);
}
