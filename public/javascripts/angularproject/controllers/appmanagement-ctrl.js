angular.module('app').controller('appmanagemetcontroller',
    ['$scope','$location', 'appmanagementResource', 'passingdataservice',
        function ($scope, $location, appmanagementResource, passingdataservice) {
            var appmanagementresource = new appmanagementResource();
            // var passingdataservice = new passingdataservice();
            $scope.PageList=[];
            appmanagementresource.$init(function(data){
                $scope.PageList = data.obj;
                console.log(data.obj);
                angular.forEach($scope.PageList,function(item) {
                    item.editmode = false;
                             
                });
            });
            // $scope.PageList = [
            //     {"id":1, "PageName":"Page A", "Status":true, "editmode":false},
            //     {"id":2, "PageName":"page B", "Status":true, "editmode":false},
            //     {"id":3, "PageName":"page C", "Status":false, "editmode":false},
            //     {"id":4, "PageName":"page D", "Status":false, "editmode":false},
            // ];
            $scope.Edit = function(obj){
                obj.editmode = true;
            }
            $scope.Add = function(){
                $scope.PageList.push({"id":0, "pagename":"", "pagestatus":true, "widget":[], "editmode":true});
            }

            $scope.Save = function(){

            }

            $scope.Update = function(){
                
            }
            
            $scope.turnoffaddmode = function(index){
                $scope.PageList.splice(index,1);
            }

            $scope.turnoffeditmode = function(obj){
                obj.editmode = false;    
            }

            $scope.ComposePage = function(obj){
                passingdataservice.appmanagementobj = obj;
                $location.path('appcomposer');
            }
        }
    ]);