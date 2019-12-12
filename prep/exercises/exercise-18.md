# Exercise 17

1. Comment out the registration of the `carsSvc` created in the previous exercise (the one registered with the `factory` method).

2. Add JSON Server to the Car Tool.

    a. Stop the Car Tool App web server if running.

    b. Open a terminal window, change to the `car-tool-app` folder, run the following command:

    ```bash
    npm install -D -E json-server npm-run-all
    ```

    c. Create a new file named `db.json` in the same folder as the `package.json` file. Copy the following JSON into the file.

    ```json
    { "cars": [
        { "id": 1, "make": "Ford", "model": "Fusion Hybrid", "year": 2019, "color": "white", "price": 25000 },
        { "id": 2, "make": "Tesla", "model": "S", "year": 2018, "color": "red", "price": 125000 } ] }
    ```

    d. Replace the `scripts` section of the `package.json` file with the following JSON:

    ```json
    "scripts": {
      "start": "run-p rest web",
      "web": "parcel public/index.html",
      "rest": "json-server --port 3050 ./db.json"
    },
    ```

    e. From the terminal window, in the same folder as the `package.json` file, start the web server:

    ```bash
    npm start
    ```

3. Create a new service named `carsSvc` using the `service` method.

4. Using the `$http` service implement methods for getting all of the cars, appending a car, replacing a car, and deleting a car.

5. Utilize the new `carsSvc` within `carTool` component to perform the various operations of the Car Tool application. Remember, promises are being used, this will change how the code is used.

6. Run the application and verify it works. Be sure to check your terminal window and browser console for errors.
