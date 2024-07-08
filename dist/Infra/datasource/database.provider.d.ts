import { DataSource, DataSourceOptions } from 'typeorm';
import 'dotenv/config';
export declare const PgOptions: DataSourceOptions;
export declare const AppDataSource: DataSource;
export declare const databaseProviders: {
    provide: string;
    useFactory: () => Promise<DataSource>;
}[];
