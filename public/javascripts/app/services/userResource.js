(function () {
    "use strict";
    angular.module('app').factory('userResource',
    ["$resource", userResource]);

    function userResource($resource) {
        return $resource("/api/user/:action/:_id",
               { _id: '@_id' },
               {
                 login: {method:'POST', params:{action:'login'}},
                 session: {method:'GET', params:{action:'session'}},
                 create: {method:'POST', params:{action:'create'}},
                 getall: {method:'GET', params:{action:'getall'}},
                 
               });
    }
}());