angular.module('BeerApp', [])
    .controller('BeerController', ['Brewery', BeerController])
    .factory('Brewery', ['$http', BreweryFactory])

function BeerController(Brewery) {
    var Beer = this;

    Beer.newBeer = {};
    Beer.onTap = [];

    Beer.submitBeer = function() {
        console.info('Submitting a new beer!', Beer.newBeer);

        Brewery.postBeer(Beer.newBeer)
            .then(Beer.postBeerSuccess, Beer.postBeerError);
    };

    Beer.postBeerSuccess = function(res) {
        console.info('New Beer successfully added to mongo!', res.data);
        Beer.onTap.push(res.data);
    };

    Beer.postBeerError = function (err) {
        console.error('Could not make a new beer :(', err);
    };
}

function BreweryFactory($http) {
    return {
        postBeer: function(newBeer) {
            return $http.post('/api/beer', newBeer);
        },
        getBeer: function(query) {
            return $http.get('/api/beer' + querystring(query));
        }
    }
}

function querystring(queryObj) {
    var str = '?';
    for(var key in queryObj) {
        str += key +'='+ encodeURIComponent(queryObj[key]) + '&';
    }
    return str.slice(0,-1);
    // return str;
}
