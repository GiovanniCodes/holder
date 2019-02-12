angular.module("listings").controller("ListingsController", [
  "$scope",
  "Listings",
  function($scope, Listings) {
    /* Get all the listings, then bind it to the scope */
    Listings.getAll().then(
      function(response) {
        $scope.listings = response.data;
      },
      function(error) {
        console.log("Unable to retrieve listings:", error);
      }
    );
    $scope.addMe = {
      name: "",
      code: "",
      address: "",
      coordinates: {
        latitude: 0,
        longitude: 0
      }
    };
    //$scope.listings = Listings;
    $scope.detailedInfo = undefined;

    $scope.addListing = function() {
      /**TODO 
	  *Save the article using the Listings factory. If the object is successfully 
	  saved redirect back to the list page. Otherwise, display the error
	 */
      //if (err) {
      //throw err;
      //} else {
      //$scope.listings.push($scope.newListing);
      //$scope.newListing = {};
      //window.location.href = "./index.html";
      var addToJSON = {
        name: $scope.addMe.buildingName,
        code: $scope.addMe.code,
        address: $scope.addMe.address,
        coordinates: {
          latitude: $scope.addMe.coordinates.latitude,
          longitude: $scope.addMe.coordinates.longitude
        }
      };

      $scope.listings.push(addToJSON);
      /*Listings.create(addToJSON).then(
        function(response) {
          window.location.href = "./index.html";
        },
        function(error) {
          console.log("Unable to add listing:", error);
        }
      );*/

      Listings.create(listings);
      //window.location.href = "./index.html";
      //}
    };

    $scope.deleteListing = function(id) {
      /**TODO
        Delete the article using the Listings factory. If the removal is successful, 
		navigate back to 'listing.list'. Otherwise, display the error. 
       */
      var index = $scope.listings.indexOf(id);
      $scope.listings.splice(index, 1);
      window.location.href = "./index.html";
    };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);
