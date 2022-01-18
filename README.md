# Random DVD Site

## Installing the Project

First make sure you have npm and node on your computer. <br />
You need atleast npm version 8.0.0 or higher and node 14 or higher <br />
Then run **`npm install`** at the root of this project

## Running the Project

After all modules are installed you can run the project with the **`npm start`** command. This will concurrently start a webpack dev server for frontend and a node express server for api calls. You can view the site at `localhost:3000`

## Architecture Considerations

The following technologies were used for this site

### Frontend

React: View layer, using component design pattern <br />
Webpack: Used for bundling, handling assets (images, styles), transpiling of es6<br />
Sass: Versatile style management<br />
Redux: Global state management

### Backend

ExpressJS: I wanted to mimic a real world scenario of calling an api to read and write data, instead of using localstorage in the browser.

## Other Notes

-Since this is a practice project I'm just running it as webpack dev server instead of making a production build that would need to be hosted. 

-In the webpack dev server config I'm running the api through a proxy so that it can be called using the current web browser url instead of using the express server's url and port. 

-The express server is returning data from a static json file. If the the user has made updates it will read from a userData.json file, otherwise it will read from a default json file that you provided in the code challenge.  This is to simulate retrieving data from a database. Yes I could have used localstorage but wanted to showcase how I handle api calls and response. In a real application the api calls would be querying/updating a database instead of a json file.

-When building this out I would have clarified with design/business how the filter and sorting should be handled. For example if someone sorts by category and  filters by category at the same time, the results are the same as just filtering by category. Just something I would mention at some point.

-I added 1 simple unit test that tests a utility function I had. In a real world situation I'd have test with the components and other code as well. That jest test can be ran using `npm test`

-Fun project