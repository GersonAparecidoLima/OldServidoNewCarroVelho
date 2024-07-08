import { MigrationInterface, QueryRunner } from "typeorm";
export declare class Pb1712964544047 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
