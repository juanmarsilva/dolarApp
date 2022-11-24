const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
    DB_USER, DB_PASSWORD, DB_HOST, DATABASE, DB_NAME,
} = process.env;
console.log('todo process.env', process.env)
console.log('este es el NODE_ENV', process.env.NODE_ENV)
let sequelize =
    process.env.NODE_ENV === "production"
  // en Railway
    ? new Sequelize(`${process.env.DATABASE_URL}`)
// en heroku
    // ? 
    // new Sequelize({
    //     database: DB_NAME,
    //     dialect: "postgres",
    //     host: DB_HOST,
    //     port: 5432,
    //     username: DB_USER,
    //     password: DB_PASSWORD,
    //     pool: {
    //         max: 3,
    //         min: 1,
    //         idle: 10000,
    //     },
    //     dialectOptions: {
    //         ssl: {
    //         require: true,
    //         // Ref.: https://github.com/brianc/node-postgres/issues/2009
    //         rejectUnauthorized: false,
    //         },
    //         keepAlive: true,
    //     },
    //     ssl: true,
    // })
    : 
    new Sequelize(
        `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DATABASE}`,
        { logging: false, native: false }
    );

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));

// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

const { Currency, Evolution, Exchanges } = sequelize.models

// Aca vendrian las relaciones
// Product.hasMany(Reviews);



module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  connexion: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
