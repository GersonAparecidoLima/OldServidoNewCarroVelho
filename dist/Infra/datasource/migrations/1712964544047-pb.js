"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pb1712964544047 = void 0;
class Pb1712964544047 {
    constructor() {
        this.name = 'Pb1712964544047';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "cliente" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "cpf" character varying NOT NULL, "telefone" character varying NOT NULL, "email" character varying NOT NULL, CONSTRAINT "PK_18990e8df6cf7fe71b9dc0f5f39" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "cliente"`);
    }
}
exports.Pb1712964544047 = Pb1712964544047;
//# sourceMappingURL=1712964544047-pb.js.map