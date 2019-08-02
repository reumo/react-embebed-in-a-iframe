# react-embebed-in-a-iframe

This repository has been created to solve a program related to embed a ReactJS application in an iframe and pass a parameter to it.

To achieve the objective we take advantage of the url queryParams that we will use to load the app in the iframe.

In the example we load the React JS application launched with npm start at **http://localhost:3000/** and add 2 queryParams **country** and **car** with the respective **ES** and **lamborghini** values. The resulting url is: **http://localhost:3000?country=ES&car=lamborghini**.

In order to capture the queryParams in the App.js file we use: **window.location.search** that returns **?country=ES&car=lamborghini**.
Then we use the **URLSearchParams** interface that gives us some methods to extract the country and car parameters and we instantiate it in a constant: **const urlParams = new URLSearchParams(window.location.search)*.

Then we simply verify if the parameter exists with the **has** method of the URLSearchParams interface: **urlParams.has("country")** and collect the value with the **get** method of the same interface: **urlParams.get("country")**.

# Install and run application

clone repository 

cd  [cloned repository folder]

cd react_app

npm install

npm start

if npm start launches the server on a port other than 3000, change the port on the url in the src parameter of the iframe of the root index.html

open index.html in root folder of repository

That´s all. :)


