# Exercise 1

1. Create a new folder named "car-tool-app". The folder should be a sibling folder of "color-tool-app".

2. Change into the new folder. Run the `npm init -y` command to create a new package.json file.

3. Using npm, install two local dependencies, parcel-bundler (development dependency) and angular (application dependency).

4. Add a "start" script entry in the package.json file for starting the new application. The command is `parcel public/index.html`

5. In the "car-tool-app" folder, create two folders, "public" and "src".

6. In the "src" folder, create a new file named "index.js", add one line of code to output the text "Car Tool" to the console.

7. In the "public" folder, create an HTML file. Include elements such as DOCTYPE, html, head, title, and body. Give the web page a title of "Car Tool App", In the body, add the following HTML:

```html
<header>
  <h1>Car Tool</h1>
</header>
```

8. Just before the closing body tag, add a script element to include the "index.js" file. The path to the "index.js" file will be relative to the "index.html" file.

9. Open a terminal window and run the application using `npm start`. View the application in a web browser and verify the output to the console.

