# Book A Meal
Book A Meal is an Ecommerce web app , specifically targetted towards bringing caterers and users together. It is built on the PERN(PostgreSQL,Express,React,Node) Stack.

[![Build Status](https://travis-ci.org/timzprof/book-a-meal.svg?branch=develop)](https://travis-ci.org/timzprof/book-a-meal)
[![Coverage Status](https://coveralls.io/repos/github/timzprof/book-a-meal/badge.svg?branch=develop)](https://coveralls.io/github/timzprof/book-a-meal?branch=develop)
[![Maintainability](https://api.codeclimate.com/v1/badges/dac50eed34c957c675fd/maintainability)](https://codeclimate.com/github/timzprof/book-a-meal/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/dac50eed34c957c675fd/test_coverage)](https://codeclimate.com/github/timzprof/book-a-meal/test_coverage)

## Getting Started
Clone the Repo.
-------------
`git clone https://github.com/timzprof/book-a-meal.git`
## Prerequisites
The following tools will be needed to run this application successfully:
* Node v10.15.0 or above
* Npm v6.4 or above
## API Endpoints
- GET **api/v1/meals/** Caterers can get all meals options they uploaded
- POST **api/v1/meals/** Catereres can add meal options linked to their account
- PUT **api/vi/meals/:mealId** Caterers can update their meal options
- DELETE **api/v1/meals/:mealId** Caterers can delete their meal options
- GET **api/v1/menu/** Caterers and Users can Get the menu for the day 
- POST **api/v1/menu/** Caterers can Set a menu for the day 
- GET **api/v1/orders** Get All Orders
- POST **api/v1/orders** Users can add Meals to Orders
- PUT **api/v1/orders/:orderId** Users can modify their orders (Increment/Decrement/Delete)
- POST **api/v1/orders/checkout** Users can checkout their orders
## Installation
**On your Local Machine**
- Pull the [develop](https://github.com/timzprof/book-a-meal) branch off this repository
- Run `npm install` to install all dependencies
- Run `npm run dev` to start the app (development)
- Access endpoints on **localhost:7000**
- Cd into the `client` folder , this contains the React App for this project
- Run `npm install` to install all dependencies
- Cd out of the `client` folder and run `npm run client` to start the React App Dev Server
- Access the React App at **localhost:3000**
## Running the tests
Run `npm test` in the terminal for the cloned folder.
## Built With
* [Node.js](http://www.nodejs.org/) - Runtime-Enviroment
* [React.js](https://reactjs.com) - Front-End Library
* [Express.js](https://expressjs.com) - Backend Framework
* [PostgreSQL](https://postgresql.org) - Database
* [Redux](https://redux.js.org) - State Management Tool
## Authors
* **Timilehin Olumofin**
