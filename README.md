# welcome to flights service

## Project setup

- clone the project on your local
- Execute `npm install` on the same path as of your root directory of the downloaded project
- Create `env` file in the root directory and add the follwing environment variable
  `PORT=3000`
  -Inside the `src/config` folder create a new file `config.json` and then add the following
  piece of json

```

{
"development": {
"username": "YOUR_DB_LOGIN_NAME",
"password": "your_password",
"database": "Flights_Search_DB_DEV",
"host": "127.0.0.1",
"dialect": "mysql"
}
}
```

Once you have added db config listed above , go tot the src folder from your terminal and execut `npx sequelize db:create` then execute `npx sequelize db:migrate`

## DB Design

- Airplane Table
- Flight
- Airport

## Tables

## City -> id, name, created_at, updated_at,

## Airport -> id , name , address, city_id, created_at, updated_at

    `npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer`

     Relationship -> City has many airports and Airpot belongs to a city

## creating seeders

    `npx sequelize seed:generate --name add-airports`

==> seeding data
`npx sequelize db:seed:all`

## Airplane

==> creating airplane model
`npx sequelize model:generate --name Airplane --attributes modelNumber:String,capacity:integer  
`
then => `npx sequelize db:migrate`

==> creating seed file `npx sequelize seed:generate --name "add-airplanes"`
==. seeding file `npx sequelize db:seed:all`

## Flights

`npx sequelize model:generate --name Flights --attributes flightNumber:String,airplaneId:integer,departureAirportId:integer,arrivalAirportId:integer,arrivalTime:Date,departureTime:Date,price:integer,boardingGate:String,totalSeats:integer`
`npx sequelize db:migrate`

duration : 1:20
