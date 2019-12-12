# Exercise 2

Hint: Some steps are explicit and some have additional steps which are not explicitly mentioned. You need to fill in the gaps with what you learned.

1. Add the following code to the top of the "index.js" file.

    ```javascript
    require('angular');
    ```

2. Create a new module named "CarToolAppModule".

3. Register a controller named "CarToolController". In the controller, add a property named `headerText` to the `$scope` with the value "Car Tool".

4. Update the HTML in "index.html" to look like this:

    ```html
    <body>
      <div ng-app>
        <header>
          <h1>Car Tool</h1>
        </header>
      </div>
      <!-- script elements are here, do not copy this line -->
    </body>
    ```

5. Replace the hard coded "Car Tool" with an Angular Expression using the `$scope` variable as part of the expression.

6. Run the application and verify it works. Be sure to check your terminal window and browser console for errors.