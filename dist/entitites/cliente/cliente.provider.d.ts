import { Cliente } from "./cliente.entity";
import { DataSource } from "typeorm";
export declare const ClienteProvider: {
    provide: string;
    useFactory: (ds: DataSource) => import("typeorm").Repository<Cliente>;
    inject: string[];
};
