"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = exports.AppDataSource = exports.PgOptions = void 0;
const typeorm_1 = require("typeorm");
require("dotenv/config");
exports.PgOptions = {
    name: 'AppDataSource',
    type: 'postgres',
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/migrations/*{.ts,.js}'],
    migrationsRun: false,
    subscribers: [],
    logging: false,
};
exports.AppDataSource = new typeorm_1.DataSource(exports.PgOptions);
exports.databaseProviders = [
    {
        provide: 'AppDataSource',
        useFactory: async () => exports.AppDataSource.initialize(),
    },
];
//# sourceMappingURL=database.provider.js.map