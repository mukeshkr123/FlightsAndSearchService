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
