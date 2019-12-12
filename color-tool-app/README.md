# JSON Server Instructions

1. Open a terminal window, change to the `color-tool-app` folder, run the following command:

```bash
npm install -D -E json-server npm-run-all
```

2. Create a new file named `db.json` in the same folder as the `package.json` file. Copy the following JSON into the file.


  ```json
  {
    "colors": [
      { "id": 1, "name": "red" },
      { "id": 2, "name": "green" },
      { "id": 3, "name": "blue" }
    ]
  }
  ```

3. Replace the `scripts` section of the `package.json` file with the following JSON:

  ```json
  "scripts": {
    "start": "run-p rest web",
    "web": "parcel public/index.html",
    "rest": "json-server --port 3050 ./db.json"
  },
  ```

4. From the terminal window, in the same folder as the `package.json` file, start the web server:

  ```bash
  npm start
  ```