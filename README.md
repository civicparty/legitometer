# Legit-o-Meter

Legit-o-Meter is an interactive digital learning tool for students and teachers to evaluate the legitimacy of online news. This app is part of the [Fake the News](https://fakenews.open-austin.org/unit1/Feb_26_wireframes.html) Project funded by Mozilla Hive ATX.

A staged version of the site is hosted at: legitornot-test.herokuapp.com

## Roadmap

**Current Status:** Our team is actively developing a working prototype led by @rallyjinx, @mateoclarke, and @seandellis.

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
   - `knex seed:run`

4. Run both the front-end React client app and the back-end Node server
  - Node/Express Back-end Server
    - `npm start`
  - React Front-End Client App
    - `cd react-ui`
    - `npm start`

## Deploy

1. Publish `master` branch.
  - `git push heroku master`
2. Run db migration on heroku (if necessary)
  - `heroku run knex migrate:migrate --knexfile server/knexfile.js`
  - _It might be necessary to Reset the database in the Heroku console. BUT this looses all the data_  
  - `heroku run knex migrate:rollback --knexfile server/knexfile.js`

## Entity Relationship
[Link to image of object_model](https://cloud.githubusercontent.com/assets/5697474/24621501/4915c122-1867-11e7-960f-3a37c635f47b.JPG)



# create-react-app with a Node server on Heroku

A minimal example of using a Node backend (server for API, proxy, & routing) with a [React frontend](https://github.com/facebookincubator/create-react-app).

To deploy a frontend-only React app, use the static-site optimized  
▶️ [create-react-app-buildpack](https://github.com/mars/create-react-app-buildpack)

⤵️ [Switching from create-react-app-buildpack](#switching-from-create-react-app-buildpack)?


## Design Points

A combo of two npm projects, the backend server and the frontend UI. So there are two `package.json` configs.

  1. [`package.json`](package.json) for [Node server](server/) & [Heroku deploy](https://devcenter.heroku.com/categories/deployment)
      * `heroku-postbuild` script compiles the webpack bundle during deploy
      * `cacheDirectories` includes `react-ui/node_modules/` to optimize build time
  2. [`react-ui/package.json`](react-ui/package.json) for [React web UI](react-ui/)
      * generated by [create-react-app](https://github.com/facebookincubator/create-react-app)


## Demo

[Demo deployment](https://cra-node.herokuapp.com/): example API call from the React UI is [fetched with a relative URL](react-ui/src/App.js#L16) that is served by an Express handler in the Node server.


## Deploy to Heroku

```bash
git clone https://github.com/mars/heroku-cra-node.git
cd heroku-cra-node/
heroku create
git push heroku master
```

This deployment will automatically:

  * detect [Node buildpack](https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-nodejs)
  * build the app with
    * `npm install` for the Node server
    * `heroku-postbuild` for create-react-app
  * launch the web process with `npm start`
    * serves `../react-ui/build/` as static files
    * customize by adding API, proxy, or route handlers/redirectors

⚠️ Using npm 5’s new `package-lock.json`? We resolved a compatibility issue. See [PR](https://github.com/mars/heroku-cra-node/pull/10) for more details.

👓 More about [deploying to Heroku](https://devcenter.heroku.com/categories/deployment).


## Switching from create-react-app-buildpack

If an app was previously deployed with [create-react-app-buildpack](https://github.com/mars/create-react-app-buildpack), then a few steps are required to migrate the app to this architecture:

1. Remove **create-react-app-buildpack** from the app; [heroku/nodejs buildpack](https://devcenter.heroku.com/articles/nodejs-support#activation) will be automatically activated

    ```bash
    heroku buildpacks:clear
    ```
1. Move the root React app files (including dotfiles) into a `react-ui/` subdirectory

    ```bash
    mkdir react-ui
    git mv [!react-ui]* react-ui/
    # You'll see "fatal: Not a git repository"; let's fix that error
    mv react-ui/.git ./
    ```
1. Create a root [`package.json`](package.json), [`server/`](server/), & [`.gitignore`](.gitignore) modeled after the code in this repo
1. Commit and deploy ♻️

    ```bash
    git add -A
    git commit -m 'Migrate from create-react-app-buildpack to Node server'
    git push heroku master
    ```


## Local Development

### Run the API Server

In a terminal:

```bash
# Initial setup
npm install

# Start the server
npm start
```


### Run the React UI

The React app is configured to proxy backend requests to the local Node server. (See [`"proxy"` config](react-ui/package.json))

In a separate terminal from the API server, start the UI:

```bash
# Always change directory, first
cd react-ui/

# Initial setup
npm install

# Start the server
npm start
```
