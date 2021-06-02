RX Application Mock Server
==================================================

Running version found [here](https://rx-server-mock.herokuapp.com/)
Deploys Automatically

## Adding Endpoints/Payload

Create a new endpoint and create your desired payload in a new `.json` file in the `./db` folder.  All changes/new endpoints made on the `master` branch will automatically be deployed by AWS CodeDeploy.

## Running locally

- Clone Repo
- `yarn install`
- Run `node server.js`
- Update `.db` folder with JSON data
