var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello world!';
  $scope.posts = [
  {title: 'project 1', upvotes: 5},
  {title: 'project 2', upvotes: 2},
  {title: 'project 3', upvotes: 15},
  {title: 'project 4', upvotes: 9},
  {title: 'project 5', upvotes: 4}
];
$scope.addPost = function() {
	if (!$scope.title || $scope.title === '') { return }
		$scope.posts.push({
			title: $scope.title,
			link: $scope.link,
			upvotes: 0
		});
	$scope.title = '';
	$scope.link = '';
}

$scope.incrementUpvotes = function(post) {
	post.upvotes += 1;
}
}]);