/* Simple Static Client Side Router */
module.exports = function(){

    var routes = {},
        qs = require('query-string');

    return {
        handleRoute: function(sRoute){
            if(typeof routes[sRoute] === 'function')
                routes[sRoute](/* Pass Query Params back to Callback */qs.parse(sRoute));
        },
        registerRoute: function(sRoute, handler){
            if(typeof sRoute === 'string' && typeof handler === 'function'){
                routes[sRoute] = handler;
            }else if(typeof sRoute === 'object' && sRoute.length > 1 ){
                for (var i = 0 ; i <= sRoute.length; i++) {
                    routes[sRoute[i]] = handler;
                };
            }
        }
    };

};
