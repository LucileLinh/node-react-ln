# node-react-ln

An node and react demo application by Lucile Nguyen.

## Start node server

Move to the root project directory `node-react-ln`
`npm server`

## Start client application

Move to the `client` folder
`yarn start`
Runs the app in the development mode
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Some note about the project:

- I use the real backend of heroku cost of module.
- I want to keep the project as simple as possible.
- The graph part is actually done with d3.js as d3 is one of my favorite framework. Otherwise this can be achieved with basic HTML elements (styled div and text).
- I do not have time to write any test as far as it is not a reel project but a Spike. In a reel condition tests should be written before coding.
- I didn't style the Search component and did not style the page exactly like in the app. It is intentional. The styling (css) part is time consuming but not worth the evaluation. I would like not to loosing time at styling in a test.
- For most of the package, heroku doesnt send enough information, I just handle it simply. Tested on `npm` package, it actually works but other package like `d3` or `np` won't give enough details.
- I dont create any PR for my code as I'm the only person working on this demo project. In a real project, a git workflow must be determined and PR must be created for any changes.
