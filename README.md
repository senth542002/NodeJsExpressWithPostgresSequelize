| Label | Image |
| --- | --- |
| Pipeline status | [![pipeline status](https://gitlab.com/senth542002/NodeJsExpressWithPostgresSequelize/badges/master/pipeline.svg)](https://gitlab.com/senth542002/NodeJsExpressWithPostgresSequelize/commits/master) |
|Coverage report | [![coverage report](https://gitlab.com/senth542002/NodeJsExpressWithPostgresSequelize/badges/master/coverage.svg)](https://gitlab.com/senth542002/NodeJsExpressWithPostgresSequelize/commits/master) |


Basic Rest Application which returns Hello World response for a get Call. 

Following commands have to be run to execute the REST Service: <br/>
npm init <br/>
npm install express --save <br/>
npm install eslint --save-dev <br/>
npm install js-beautify <br/>

#postgres database<br/>

#Initialize Database<br/>
initdb /usr/local/var/postgres<br/>

pg_ctl -D /usr/local/var/postgres start<br/>
pg_ctl -D /usr/local/var/postgres stop<br/>

createdb mydatabasename<br/>
dropdb mydatabasename<br/>

sudo -u senthilkumar psql postgres<br/>
postgres=#CREATE USER postgres SUPERUSER;<br/>
postgres=#CREATE DATABASE postgres WITH OWNER postgres;<br/>

npm install pg sequelize --save<br/>


# NodeJsExpressWithPostgresSequelize <br/>

mkdir -p NodeJsExpressWithPostgresSequelize/{bin,server} <br/>
cd NodeJsExpressWithPostgresSequelize <br/>
$ npm init -y <br/>
$ npm install --save express body-parser morgan <br/>

$ npm i -D nodemon <br/>
$ npm run start:dev <br/>

# On macOS </br>

If you installed PostgreSQL via Homebrew: </br>

To start manually: </br>
pg_ctl -D /usr/local/var/postgres start </br>
To stop manually: </br>
pg_ctl -D /usr/local/var/postgres stop </br>
To start PostgreSQL server now and relaunch at login: </br>
brew services start postgresql </br>
And stop PostgreSQL: </br>
brew services stop postgresql </br>


# Sequelize Setup <br/>

$ npm install -g sequelize-cli <br/>
$ npm install --save sequelize pg pg-hstore <br/>
$ sequelize init <br/>
$ createdb todos-dev <br/>

# Generating Models <br/>
$ sequelize model:create --name Todo --attributes title:string <br/>
$ sequelize model:create --name TodoItem --attributes content:string,complete:boolean <br/>

# DB Table Creation <br/>
$ sequelize db:migrate <br/>

# Tutorial url: https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize <br/>

npm install supertest mocha chai --save-dev  <br/>

# References <br/>
https://www.codementor.io/olatundegaruba/integration-testing-supertest-mocha-chai-6zbh6sefz <br/>
https://hackernoon.com/api-testing-using-supertest-1f830ce838f1 <br/>


# Learnings: <br/>
Add engines Entry ("engines") to the package.json for heroku to identify. <br/>
Install heroku cli: npm install -g heroku <br/>
log into heroku cli : heroku login <br/>
Create heroku deployment app: heroku create nodejs-expressjs-with-postgres <br/>
Create heroku addon postgresql db: heroku addons: create heroku-postgresql:hobby-dev <br/>

execute the command sequelize init from the root folder so that migrations, config, models, seeders folders get created. <br/>
To create tables in heroku postgresql: heroku run sequelize db:migrate <br/>

# Do the following to deploy the app to heroku <br/>
git add . <br/>
git commit -m "" <br/>
git push heroku master <br/>
