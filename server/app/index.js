let Redis = require('ioredis');
let redis = new Redis();

redis.set('foo', 'bar');
redis.get('foo', function (err, result) {
    console.log(result);
});

// Or using a promise if the last argument isn't a function
redis.get('foo').then(function (result) {
    console.log(result);
});
