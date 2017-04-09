# Legit-o-Meter

Legit-o-Meter is an interactive digital learning tool for students and teachers to evaluate the legitimacy of online news. This app is part of the [Fake the News](https://fakenews.open-austin.org/unit1/Feb_26_wireframes.html) Project funded by Mozilla Hive ATX.

A staged version of the site is hosted at: test.missionfake.news

## Roadmap

**Current Status:** Our team is actively developing a working prototype led by @rallyjinx and supported by @mateoclarke.

**Milestones:**

- March 28, 2017: Galvanize Capstone Presentation

## Contributing

TODO

## Tech Stack

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). It uses [Node.js](https://nodejs.org/en/) and [Express.js](https://expressjs.com/) with [Knex](http://knexjs.org/) providing a query building for a Postgres datastore. The project uses [Semantic UI](https://semantic-ui.com/) framework for styling UI components.

To get setup:

1. Download Node
   - `npm install`

2. Download Postgres
   - We used the Postgres Mac app. Once you open it for the first time, initialize it.
   - You will probably need to add this to your bash or zsh config
   - `export PATH=$PATH:/Applications/Postgres.app/Contents/Versions/latest/bin`

3. Create a database
   - Install [knex.js](http://knexjs.org/)
   - `npm install knex -g`
   - Create the database
   - `createdb legit-o-meterdb`
   - Migrate and Seed the database
   - `knex migrate:latest`
   - `knex seed:run `

4. Run both the front end React server and the backend Node server
  - React
    - `npm start`
  - Node
    - `npm run start:dev`
    
 ## Entity Relationship
[Link to image of object_model](https://cloud.githubusercontent.com/assets/5697474/24621501/4915c122-1867-11e7-960f-3a37c635f47b.JPG)
