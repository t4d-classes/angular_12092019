# Exercise 4

1. Create form to collect new car data. The form should have the following fields: make, model, year, color and price.

2. At the bottom of the form add a button with the text of "Add Car".

3. When the button is clicked, collect the form data and add a new car to the array of car objects. Be sure to set the id of the car being added.

4. Add a new column to the table with a column header labeled "Actions".

5. On each car row, add a button labeled with "Delete". When the delete button is clicked removed the car from the array of cars.

```html
<button type="button" ng-click="deleteCar(car.id)">Delete</button>
```

To perform a delete:

```javascript
const carIndex = $scope.cars.findIndex(c => c.id === carId);
$scope.cars.splice(carIndex, 1);

// or

$scope.cars = $scope.cars.filter(c => c.id !== carId);
```

6. Run the application and verify it works. Be sure to check your terminal window and browser console for errors.
