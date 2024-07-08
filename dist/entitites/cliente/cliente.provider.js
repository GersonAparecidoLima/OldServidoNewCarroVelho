"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteProvider = void 0;
const cliente_entity_1 = require("./cliente.entity");
exports.ClienteProvider = {
    provide: 'ClienteRepository',
    useFactory: ((ds) => ds.getRepository(cliente_entity_1.Cliente)),
    inject: ['AppDataSource']
};
//# sourceMappingURL=cliente.provider.js.map