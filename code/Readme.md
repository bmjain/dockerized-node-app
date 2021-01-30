### Prerequisites
- npm (latest version)
- node v14


## How to Run only Node App Locally


In order to run the Node Application as a standalone app, run the following commands in the terminal.
- From the parent folder navigate to `code` folder.
- Run `npm install` to install all the necessary packages for the project to run successfully
- Run `npm test` to run some api testing (Mocha and Chai)
- Run `npm start` to run the NodeJS Application on Port 3000
- Once the server is running, navigate to `http://localhost:3000/api/getData?q=rich` to get the JSOn output matching the search string


## How to Run Node + Angular App Locally

In order to run the Node + Angular Application as a complete app, run the following commands in the terminal
- From the parent folder navigate to `code` folder.
- Run `npm install` to install all the necessary packages for the Node project to run successfully
- Navigate to `ui` folder from code folder.
- Install the Angular CLI using the command `npm install -g @angular/cli`
- Run `npm install` to install all the necessary packages for the Angular project to run successfully.
- Run `ng build` to build the angular UI to be used for NodeJS Backend
- Navigate back to the `code` folder and run `npm start`.
- Once the server is running, the Angular UI would be accessible at http://localhost:3000





