>Install nodejs-lts using Choco package manager (In order to work you wil need choco installed)
choco install nodejs-lts

>Install and init typescript  
npm install typescript -D
npx tsc --init

>Express is used to create routes and responses, types is necessary because we using TS
npm install express
npm install @types/express -D

> Typescript node to convert ts files in js (build for web)
npm install ts-node -D

>Install and executes the node server with a watch flag (auto reload on save scripts changes)
npm install ts-node-dev -D
npx ts-node-dev src/server.ts

>Install knex, for using database connections as javascript
npm install knex

>> Sqlite3, it's used to create an arhcive to store database files
npm install sqlite3

>> Installing cors to cross sharing
npm install cors
npm install @types/cors -D