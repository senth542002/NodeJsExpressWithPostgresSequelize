# NodeJsExpressWithPostgresSequelize <br/>

mkdir -p NodeJsExpressWithPostgresSequelize/{bin,server} <br/>
cd NodeJsExpressWithPostgresSequelize <br/>
$ npm init -y <br/>
$ npm install --save express body-parser morgan <br/>

$ npm i -D nodemon <br/>
$ npm run start:dev <br/>

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

