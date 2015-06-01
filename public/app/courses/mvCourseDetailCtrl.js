angular.module('app')
    .controller('mvCourseDetailCtrl', function ($scope, mvCachedCourses, $routeParams){
        mvCachedCourses.query().$promise.then(function (coll) {
            coll.forEach(function (item) {
                if(item._id === $routeParams.id) {
                    $scope.course = item;
                }
            });
        });
    });