			var app = angular.module("myApp", ["ngRoute"]);
			app.config(function($routeProvider) 
			{
				$routeProvider
			    .when("/", {
					controller: 'convertCtrl',
			        templateUrl : "main.html"
			    })
			    .when("/history", {
					controller: 'convertCtrl',
			        templateUrl : "history.html"
			    })
			}).run(['$rootScope', "$route",  function ($scope, $route) {
				
				
				$scope.$on("$routeChangeSuccess", function (scope, next, current) {
					$scope.theUrl = $route.current.templateUrl;
					$scope.submenu = $route.current.submenu;
				});
			}]);
			
						
			app.filter("trust", ['$sce', function($sce) {
				return function(htmlCode){
					return $sce.trustAsHtml(htmlCode);
				}
			}]);
			
			

var entryHistory = [];

app.controller('convertCtrl', function($rootScope, $scope, $sce) {
	
		$scope.convert = [];
		
		$scope.doConvert = function () {
					$scope.convert = []; //clear all
					//$scope.convert.error = "";
					var usrEnrty = $scope.converter.userentry;
					
					if (usrEnrty.trim().length < 1)
					{
						$scope.convert.error = "Error: please enter word(s) to be converted";
						return;
					}

					 var alphanumWords = /^[A-Za-z0-9 ]+$/;
					if(!usrEnrty.match(alphanumWords))  
						$scope.convert.error = "Error: words and sentences only";
					else  
						$scope.convert.text = convertToPigL(usrEnrty); 
				}
				
				
				
			

		function convertToPigL(theText)
		{
			var textArr = theText.split(" ");
			for (var i = 0; i<textArr.length; i++)
			{
				if(!isNaN(textArr[i][0]))
					continue;
				
				var suffx = "ay";
				if(vowelArray.indexOf(textArr[i][0]) > -1)
					suffx = "i";
				
					var newTxt = "";
					if(textArr[i].length > 1)
						newTxt = textArr[i].substring(1);
					
					newTxt += (textArr[i][0].toLowerCase() + suffx);
					//console.log("newTxt = " + newTxt);
					textArr[i] = newTxt;
			}
			var res = textArr.join(" ");
			addEntry(theText + " (" + res + ")")
			return res;
		}


		function addEntry(theEntry)
		{
			if (entryHistory.length > 9)
				entryHistory = entryHistory.slice(entryHistory.length-9, entryHistory.length)
			entryHistory.push(theEntry);
			$rootScope.converthistory = $sce.trustAsHtml(entryHistory.join("<br /><br />"));
		}
				
});


var vowelArray = ['a','e','i','o','u','A','E','I','O','U'];

