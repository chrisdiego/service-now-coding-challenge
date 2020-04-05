# ServiceNow coding challenge

## Getting started
1. Clone the incident API repository (https://github.com/jvillagomez/ServiceNowCodingChallenge)
2. Start the API's local server using `npm start`, your local express server will be running on port 3000
3. Clone this repo
2. run `npm install` in the respository
5. run `npm start`, and you application will be running on port 8082

## Components

### Incidents
Incidents will take an array of incident objects and render them into a table
prop | type | description
------------ | -------------  | -------------
incidents | array | a list of incident objects
loading | boolean | toggles the loading icon, or the component
filter | string | value that the user wishes to filter incident records on

### StateTotals
StateTotals will take an object of status totals, display those totals to the user, and render a set of buttons to filter `<Incidents />` by status
prop | type | description
------------ | -------------  | -------------
incidentTotals | array | a list of statuses and their total counts from the array of incidents
loading | boolean | toggles the loading icon, or the component
setFilter | function | updates the current filter of `<Incidents />`, argument is a string

### Heading
Heading will render a row with a `<h2>` tag left aligned
prop | type | description
------------ | -------------  | -------------
children | string | markup to wrap in an h2

### Card
A simple content container
prop | type | description
------------ | -------------  | -------------
heading | string | Card heading rendered in an `<h2>`
onClick | function | optional onClick function to wrap the card in
children | string | content for the body of the card
className | string | optional for adding additional classes

## External tools used
### create-react-app
This project was bootstrapped using Create-React-App https://github.com/facebook/create-react-app

### bootstrap
This project utilizes bootstrap's layout classes, mainly `row` and `col`. This allows for a responsive layout without having to write your own CSS for every breakpoint
https://github.com/twbs/bootstrap

### react-svg
Allows for rendering SVG's in React
https://github.com/tanem/react-svg
