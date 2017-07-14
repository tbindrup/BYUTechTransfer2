(function(app){

function EditTechnologies($http, $sce, $sessionStorage, _) {
	var addTechnology = function(techObject) {
		return $http.post('http://tech-transfer.byu.edu/api/newTech.php', techObject)
		.then(function(result){return result.data;})
		.then(function(result) {
			console.log('my measles eat dogs.', result);
		});
	};

	var editTechnology = function(techObject) {
		console.log('techObject', techObject);
		return $http.post('http://tech-transfer.byu.edu/api/updateTech.php', techObject)
		.then(function(result){return result.data;})
		.then(function(result) {
			console.log('my measles eat dogsnot.', result);
		});
	};
	
	return {
		'addTechnology': addTechnology,
		'editTechnology': editTechnology,
	};
}

app
.factory('EditTechnologies', EditTechnologies);
})(angular.module('techtransfer'));