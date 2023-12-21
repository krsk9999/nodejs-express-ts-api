# nodejs-express-api

// Installing project dependencies
npm install typescript
npm install ts-node
npm install nodemon



// This will generate the tsconfig.json file
tsc --init

// Initiate npm project
npm init -y

// Installing dependencies
npm install express cors dotenv multer tedious sequelize 

// Install types for ts
npm install @types/express @types/cors @types/dotenv @types/multer @types/sequelize -D

//Install packages for Authentication
npm i bcruptjs jsonwebtoken




















docker run -d --name mongodb -p 27017:27017 mongo

-e MONGO_INITDB_ROOT_USERNAME=admin \
-e MONGO_INITDB_ROOT_PASSWORD=password \