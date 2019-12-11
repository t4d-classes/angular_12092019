# Exercise 15

1. Move the table row in Car Table to its own component named Car View Row component. The Car View Row component should display one row of car data.

    Please keep the following in mind... The selector option on the component metadata can be any valid CSS selector not just custom elements. You must construct a valid DOM structure.

2. Replace the table row in Car Table with the new Car View Row component.

3. Create a new component named Car Edit Row component. The Car Edit Row component displays input fields in the make, model, year, color & price columns. In the actions column (the actions column is the column where the delete button lives), there are two buttons: Save and Cancel.

    Hint: You can put a formGroup on any element including ng-container.

4. When the Save button is clicked, the changes are saved and the Car Edit Row component changes to a Car View Row component.

5. When the Cancel button is clicked, the changes are not saved and the Car Edit Row component changes to a Car View Row component.

6. Add a button with a label of 'Edit' to the Car View Row component. When the button is clicked, the Car View Row component is changed to the Car Edit Row component. The component is populated with the car data. Only one row is editable at a time.

7. If the Add Car button is clicked, or the Edit button, or the Delete button for another row is clicked while editing a row, the changes are dropped, the desired action is performed, and the Car Edit Row changes to a Car View Row.

8. Run the application and verify it works. Be sure to check your terminal window and browser console for errors.
