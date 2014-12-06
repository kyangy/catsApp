angular
	.module('catApp')
	.controller('KittiesController', KittiesControllerFunc);

	function KittiesControllerFunc(){
		this.adoptTheseCats = adoptTheseCats;
		this.cantHaveTheseCats = cantHaveTheseCats;
		this.kittiesList = [
		{
			catName: 'Karl',
			monthsOld: 5,
			gender: 'boy',
			image: "images/carl.png",
			adopted: true,
		},
		{
			catName: 'Jack',
			monthsOld: 4,
			gender: 'boy',
			image: "images/jack.png",
			adopted: false
		},
		{
			catName: 'Oscar',
			monthsOld: 2,
			gender: 'boy',
			image: "images/oscar.png",
			adopted: false
		},
		{
			catName: 'Princess Mew',
			monthsOld: 3,
			gender: 'girl',
			image: "images/princessmew.png",
			adopted: false
		}

	]

function adoptTheseCats () {
	return this.kittiesList.filter(function(x) {return x.adopted === false;})
};

function cantHaveTheseCats () {
	return this.kittiesList.filter(function(x) {return x.adopted === true;})

};

}